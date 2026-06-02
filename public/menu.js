// menu.js
async function renderMenu() {
    const res = await fetch('/api/me');
    let user = null;
    if (res.ok) {
        user = await res.json();
    }
    const isAdmin = user && user.role === 'admin';

    const commonLinks = [
        { href: 'index.html', text: '主页' },
        { href: 'about.html', text: '关于' },
        { href: 'new.html', text: '新闻' },
        { href: 'task.html', text: '任务' },
        { href: 'rank.html', text: '排行' }
    ];

    let authLinks = [];
    if (user) {
        authLinks.push({ href: 'profile.html', text: `${user.username}` });
        authLinks.push({ href: '#', text: '退出', id: 'logout-btn' });
    } else {
        authLinks.push({ href: 'login.html', text: '登录' });
        authLinks.push({ href: 'spin.html', text: '注册' });
    }

    let adminLink = [];
    if (isAdmin) adminLink.push({ href: 'admin.html', text: '管理面板' });

    const allLinks = [...commonLinks, ...adminLink, ...authLinks];
    const ul = document.createElement('ul');
    ul.className = 'nav-menu';
    for (const link of allLinks) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.text;
        if (link.id === 'logout-btn') {
            a.id = 'logout-btn';
            a.addEventListener('click', async (e) => {
                e.preventDefault();
                await fetch('/api/logout', { method: 'POST' });
                window.location.href = 'index.html';
            });
        }
        li.appendChild(a);
        ul.appendChild(li);
    }
    const navElement = document.getElementById('global-nav');
    if (navElement) {
        navElement.innerHTML = '';
        navElement.appendChild(ul);
    }
}
document.addEventListener('DOMContentLoaded', renderMenu);