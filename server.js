const express = require('express');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const fs = require('fs').promises;
const path = require('path');
const marked = require('marked');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(session({
    secret: 'string-jiao-2026',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }
}));

const DATA_DIR = path.join(__dirname, 'data');
const USERS_FILE = path.join(DATA_DIR, 'users.json');
const TASKS_FILE = path.join(DATA_DIR, 'tasks.json');
const EXCHANGE_FILE = path.join(DATA_DIR, 'exchangeRequests.json');

(async () => {
    await fs.mkdir(DATA_DIR, { recursive: true });
    await initDataFiles();
})();

async function initDataFiles() {
    try {
        await fs.access(USERS_FILE);
    } catch {
        const defaultAdmin = {
            id: 1,
            username: 'admin',
            password: await bcrypt.hash('admin123', 10),
            role: 'admin',
            tag: '超级管理员',
            coins: 9999,
            tasks: [],
            personalMd: '# 管理员主页\n欢迎参观',
            totalTasksCompleted: 0,
            totalTasksAccepted: 0
        };
        await fs.writeFile(USERS_FILE, JSON.stringify([defaultAdmin], null, 2));
    }
    try {
        await fs.access(TASKS_FILE);
    } catch {
        const defaultTasks = [
            { id: 'task1', title: '完成一篇孙教宣传文章', reward: 10, maxParticipants: 5, currentParticipants: 0, deadline: '2025-12-31', active: true },
            { id: 'task2', title: '招募一名新信徒', reward: 20, maxParticipants: 3, currentParticipants: 0, deadline: '2025-12-31', active: true },
            { id: 'task3', title: '找出反孙教间谍', reward: 50, maxParticipants: 2, currentParticipants: 0, deadline: '2025-12-31', active: true }
        ];
        await fs.writeFile(TASKS_FILE, JSON.stringify(defaultTasks, null, 2));
    }
    try {
        await fs.access(EXCHANGE_FILE);
    } catch {
        await fs.writeFile(EXCHANGE_FILE, JSON.stringify([], null, 2));
    }
}

async function readJSON(file) {
    const data = await fs.readFile(file, 'utf-8');
    return JSON.parse(data);
}
async function writeJSON(file, data) {
    await fs.writeFile(file, JSON.stringify(data, null, 2));
}

// ---------- API ----------
app.post('/api/register', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ error: '用户名/密码不能为空' });
    const users = await readJSON(USERS_FILE);
    if (users.find(u => u.username === username)) return res.status(400).json({ error: '用户名已存在' });
    const hashed = await bcrypt.hash(password, 10);
    const newUser = {
        id: Date.now(),
        username,
        password: hashed,
        role: 'user',
        tag: '',
        coins: 0,
        tasks: [],
        personalMd: '# 我的个人主页\n欢迎来到我的主页！',
        totalTasksCompleted: 0,
        totalTasksAccepted: 0
    };
    users.push(newUser);
    await writeJSON(USERS_FILE, users);
    req.session.userId = newUser.id;
    req.session.username = newUser.username;
    req.session.role = newUser.role;
    res.json({ success: true, role: newUser.role });
});

app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    const users = await readJSON(USERS_FILE);
    const user = users.find(u => u.username === username);
    if (!user) return res.status(401).json({ error: '用户不存在' });
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: '密码错误' });
    req.session.userId = user.id;
    req.session.username = user.username;
    req.session.role = user.role;
    res.json({ success: true, role: user.role });
});

app.get('/api/me', async (req, res) => {
    if (!req.session.userId) return res.status(401).json({ error: '未登录' });
    const users = await readJSON(USERS_FILE);
    const user = users.find(u => u.id === req.session.userId);
    if (!user) return res.status(401).json({ error: '用户不存在' });
    res.json({
        id: user.id,
        username: user.username,
        role: user.role,
        tag: user.tag,
        coins: user.coins,
        tasks: user.tasks,
        personalMd: user.personalMd,
        totalTasksCompleted: user.totalTasksCompleted,
        totalTasksAccepted: user.totalTasksAccepted
    });
});

app.post('/api/update-personal-md', async (req, res) => {
    if (!req.session.userId) return res.status(401).json({ error: '未登录' });
    const { content } = req.body;
    const users = await readJSON(USERS_FILE);
    const user = users.find(u => u.id === req.session.userId);
    if (user) {
        user.personalMd = content;
        await writeJSON(USERS_FILE, users);
        res.json({ success: true });
    } else res.status(404).json({ error: '用户不存在' });
});

app.post('/api/change-password', async (req, res) => {
    if (!req.session.userId) return res.status(401).json({ error: '未登录' });
    const { oldPassword, newPassword } = req.body;
    const users = await readJSON(USERS_FILE);
    const user = users.find(u => u.id === req.session.userId);
    if (!user) return res.status(404).json({ error: '用户不存在' });
    const match = await bcrypt.compare(oldPassword, user.password);
    if (!match) return res.status(400).json({ error: '原密码错误' });
    user.password = await bcrypt.hash(newPassword, 10);
    await writeJSON(USERS_FILE, users);
    res.json({ success: true });
});

app.post('/api/change-username', async (req, res) => {
    if (!req.session.userId) return res.status(401).json({ error: '未登录' });
    const { newUsername } = req.body;
    const users = await readJSON(USERS_FILE);
    if (users.some(u => u.username === newUsername && u.id !== req.session.userId)) {
        return res.status(400).json({ error: '用户名已存在' });
    }
    const user = users.find(u => u.id === req.session.userId);
    if (user) {
        user.username = newUsername;
        await writeJSON(USERS_FILE, users);
        req.session.username = newUsername;
        res.json({ success: true });
    } else res.status(404).json({ error: '用户不存在' });
});

app.get('/api/tasks', async (req, res) => {
    const tasks = await readJSON(TASKS_FILE);
    res.json(tasks);
});

app.post('/api/tasks/accept', async (req, res) => {
    if (!req.session.userId) return res.status(401).json({ error: '未登录' });
    const { taskId } = req.body;
    let tasks = await readJSON(TASKS_FILE);
    const task = tasks.find(t => t.id === taskId);
    if (!task) return res.status(404).json({ error: '任务不存在' });
    if (new Date(task.deadline) < new Date()) return res.status(400).json({ error: '任务已过期' });
    if (task.currentParticipants >= task.maxParticipants) return res.status(400).json({ error: '任务已满员' });
    if (!task.active) return res.status(400).json({ error: '任务已禁用' });
    let users = await readJSON(USERS_FILE);
    const user = users.find(u => u.id === req.session.userId);
    if (user.tasks.some(t => t.taskTitle === task.title && t.status !== 'completed')) {
        return res.status(400).json({ error: '您已接取过该任务' });
    }
    task.currentParticipants++;
    user.tasks.push({
        taskId: task.id,
        taskTitle: task.title,
        rewardValue: task.reward,
        acceptTime: new Date().toISOString(),
        status: 'ongoing'
    });
    user.totalTasksAccepted++;
    await writeJSON(TASKS_FILE, tasks);
    await writeJSON(USERS_FILE, users);
    res.json({ success: true });
});

app.post('/api/tasks/complete', async (req, res) => {
    if (!req.session.userId) return res.status(401).json({ error: '未登录' });
    const { taskId } = req.body;
    let users = await readJSON(USERS_FILE);
    const user = users.find(u => u.id === req.session.userId);
    const task = user.tasks.find(t => t.taskId === taskId);
    if (!task || task.status === 'completed') return res.status(400).json({ error: '无效任务' });
    task.status = 'completed';
    task.finishTime = new Date().toISOString();
    user.coins += task.rewardValue;
    user.totalTasksCompleted++;
    await writeJSON(USERS_FILE, users);
    res.json({ success: true, reward: task.rewardValue });
});

app.post('/api/gift', async (req, res) => {
    if (!req.session.userId) return res.status(401).json({ error: '未登录' });
    const { toUsername, amount } = req.body;
    if (amount <= 0) return res.status(400).json({ error: '无效数量' });
    let users = await readJSON(USERS_FILE);
    const fromUser = users.find(u => u.id === req.session.userId);
    const toUser = users.find(u => u.username === toUsername);
    if (!toUser) return res.status(404).json({ error: '用户不存在' });
    if (fromUser.coins < amount) return res.status(400).json({ error: '金币不足' });
    fromUser.coins -= amount;
    toUser.coins += amount;
    await writeJSON(USERS_FILE, users);
    res.json({ success: true });
});

app.post('/api/exchange/request', async (req, res) => {
    if (!req.session.userId) return res.status(401).json({ error: '未登录' });
    const { account, webCoins } = req.body;
    if (webCoins < 10 || webCoins % 10 !== 0) return res.status(400).json({ error: '数量必须为10的倍数且≥10' });
    let users = await readJSON(USERS_FILE);
    const user = users.find(u => u.id === req.session.userId);
    if (user.coins < webCoins) return res.status(400).json({ error: '金币不足' });
    user.coins -= webCoins;
    await writeJSON(USERS_FILE, users);
    let requests = await readJSON(EXCHANGE_FILE);
    requests.push({
        id: Date.now(),
        username: user.username,
        account,
        webCoins,
        campusCoins: webCoins / 10,
        status: 'pending',
        time: new Date().toISOString()
    });
    await writeJSON(EXCHANGE_FILE, requests);
    res.json({ success: true });
});

app.get('/api/admin/users', async (req, res) => {
    if (req.session.role !== 'admin') return res.status(403).json({ error: '权限不足' });
    const users = await readJSON(USERS_FILE);
    const safe = users.map(u => ({ username: u.username, tag: u.tag, coins: u.coins }));
    res.json(safe);
});

app.post('/api/admin/set-tag', async (req, res) => {
    if (req.session.role !== 'admin') return res.status(403).json({ error: '权限不足' });
    const { targetUsername, newTag } = req.body;
    let users = await readJSON(USERS_FILE);
    const user = users.find(u => u.username === targetUsername);
    if (user) {
        user.tag = newTag;
        await writeJSON(USERS_FILE, users);
        res.json({ success: true });
    } else res.status(404).json({ error: '用户不存在' });
});

app.post('/api/admin/adjust-coins', async (req, res) => {
    if (req.session.role !== 'admin') return res.status(403).json({ error: '权限不足' });
    const { targetUsername, delta } = req.body;
    let users = await readJSON(USERS_FILE);
    const user = users.find(u => u.username === targetUsername);
    if (user) {
        user.coins += delta;
        await writeJSON(USERS_FILE, users);
        res.json({ success: true });
    } else res.status(404).json({ error: '用户不存在' });
});

app.get('/api/admin/tasks', async (req, res) => {
    if (req.session.role !== 'admin') return res.status(403).json({ error: '权限不足' });
    const tasks = await readJSON(TASKS_FILE);
    res.json(tasks);
});

app.post('/api/admin/update-task', async (req, res) => {
    if (req.session.role !== 'admin') return res.status(403).json({ error: '权限不足' });
    const { taskId, updates } = req.body;
    let tasks = await readJSON(TASKS_FILE);
    const idx = tasks.findIndex(t => t.id === taskId);
    if (idx !== -1) {
        tasks[idx] = { ...tasks[idx], ...updates };
        await writeJSON(TASKS_FILE, tasks);
        res.json({ success: true });
    } else res.status(404).json({ error: '任务不存在' });
});

app.post('/api/admin/add-task', async (req, res) => {
    if (req.session.role !== 'admin') return res.status(403).json({ error: '权限不足' });
    let tasks = await readJSON(TASKS_FILE);
    const newId = 'task' + Date.now();
    const today = new Date().toISOString().slice(0,10);
    const newTask = {
        id: newId,
        title: '新任务',
        reward: 10,
        maxParticipants: 5,
        currentParticipants: 0,
        deadline: today,
        active: true
    };
    tasks.push(newTask);
    await writeJSON(TASKS_FILE, tasks);
    res.json({ success: true, task: newTask });
});

app.post('/api/admin/delete-task', async (req, res) => {
    if (req.session.role !== 'admin') return res.status(403).json({ error: '权限不足' });
    const { taskId } = req.body;
    let tasks = await readJSON(TASKS_FILE);
    tasks = tasks.filter(t => t.id !== taskId);
    await writeJSON(TASKS_FILE, tasks);
    let users = await readJSON(USERS_FILE);
    users.forEach(u => {
        u.tasks = u.tasks.filter(t => t.taskId !== taskId);
        u.totalTasksAccepted = u.tasks.length;
        u.totalTasksCompleted = u.tasks.filter(t => t.status === 'completed').length;
    });
    await writeJSON(USERS_FILE, users);
    res.json({ success: true });
});

app.get('/api/admin/exchange-requests', async (req, res) => {
    if (req.session.role !== 'admin') return res.status(403).json({ error: '权限不足' });
    const reqs = await readJSON(EXCHANGE_FILE);
    res.json(reqs);
});

app.post('/api/admin/approve-exchange', async (req, res) => {
    if (req.session.role !== 'admin') return res.status(403).json({ error: '权限不足' });
    const { requestId } = req.body;
    let reqs = await readJSON(EXCHANGE_FILE);
    const idx = reqs.findIndex(r => r.id === requestId);
    if (idx !== -1 && reqs[idx].status === 'pending') {
        reqs[idx].status = 'approved';
        await writeJSON(EXCHANGE_FILE, reqs);
        res.json({ success: true });
    } else res.status(404).json({ error: '申请不存在' });
});

app.post('/api/admin/reject-exchange', async (req, res) => {
    if (req.session.role !== 'admin') return res.status(403).json({ error: '权限不足' });
    const { requestId } = req.body;
    let reqs = await readJSON(EXCHANGE_FILE);
    const idx = reqs.findIndex(r => r.id === requestId);
    if (idx !== -1 && reqs[idx].status === 'pending') {
        const reqItem = reqs[idx];
        let users = await readJSON(USERS_FILE);
        const user = users.find(u => u.username === reqItem.username);
        if (user) user.coins += reqItem.webCoins;
        await writeJSON(USERS_FILE, users);
        reqs.splice(idx, 1);
        await writeJSON(EXCHANGE_FILE, reqs);
        res.json({ success: true });
    } else res.status(404).json({ error: '申请不存在' });
});

app.get('/api/rank', async (req, res) => {
    const users = await readJSON(USERS_FILE);
    const rankData = users.map(u => ({
        username: u.username,
        tag: u.tag || '无',
        coins: u.coins,
        completed: u.totalTasksCompleted,
        accepted: u.totalTasksAccepted
    }));
    res.json(rankData);
});

app.post('/api/logout', (req, res) => {
    req.session.destroy();
    res.json({ success: true });
});

// 修正：统一使用 PORT 变量
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
