vector 教
```C++
.assign();                 // 替换内容
.at();                     // 边界检查访问
.back();                   // 末元素引用
.begin();                  // 首迭代器
.capacity();               // 当前容量
.cbegin();                 // 常量首迭代器
.cend();                   // 常量尾迭代器
.clear();                  // 清空元素
.crbegin();                // 反向常量首迭代器
.crend();                  // 反向常量尾迭代器
.data();                   // 底层数组指针
.empty();                  // 是否为空
.end();                    // 尾迭代器
.erase();                  // 删除元素
.front();                  // 首元素引用
.get_allocator();          // 获取分配器
.insert();                 // 插入元素
.max_size();               // 最大容量
.pop_back();               // 删除末元素
.push_back();              // 添加末元素
.rbegin();                 // 反向首迭代器
.rend();                   // 反向尾迭代器
.reserve();                // 预留空间
.resize();                 // 改变大小
.shrink_to_fit();          // 释放多余内存
.size();                   // 元素个数
.swap();                   // 交换内容

operator=                  // 赋值
operator[]                 // 下标访问
```

set 教
```C++
.begin();                  // 首迭代器
.cbegin();                 // 常量首迭代器
.cend();                   // 常量尾迭代器
.clear();                  // 清空
.contains();               // 是否含键(C++20)
.count();                  // 键计数(0或1)
.crbegin();                // 反向常量首
.crend();                  // 反向常量尾
.empty();                  // 是否空
.end();                    // 尾迭代器
.equal_range();            // 键区间
.erase();                  // 删除键/迭代器
.find();                   // 查找键
.get_allocator();          // 获取分配器
.insert();                 // 插入
.key_comp();               // 比较函数
.lower_bound();            // 首个不小于键
.max_size();               // 最大容量
.rbegin();                 // 反向首
.rend();                   // 反向尾
.size();                   // 元素数
.swap();                   // 交换
.upper_bound();            // 首个大于键
.value_comp();             // 值比较函数

operator=                  // 赋值
```

map 教
```C++
.begin();                  // 首迭代器
.cbegin();                 // 常量首
.cend();                   // 常量尾
.clear();                  // 清空
.contains();               // 是否含键(C++20)
.count();                  // 键计数
.crbegin();                // 反向常量首
.crend();                  // 反向常量尾
.empty();                  // 是否空
.end();                    // 尾迭代器
.equal_range();            // 键区间
.erase();                  // 删除
.find();                   // 查找
.get_allocator();          // 获取分配器
.insert();                 // 插入
.key_comp();               // 键比较函数
.lower_bound();            // 首个不小于键
.max_size();               // 最大容量
.rbegin();                 // 反向首
.rend();                   // 反向尾
.size();                   // 元素数
.swap();                   // 交换
.upper_bound();            // 首个大于键
.value_comp();             // 值比较函数

operator=                  // 赋值
operator[]                 // 下标访问（插入）
.at()                      // 边界检查访问
```

queue 教
```C++
.back();                   // 末元素
.empty();                  // 是否空
.emplace();                // 原位构造
.front();                  // 首元素
.pop();                    // 弹出首元素
.push();                   // 压入元素
.size();                   // 元素数
.swap();                   // 交换

operator=                  // 赋值
```

stack 教
```C++
.empty();                  // 是否空
.emplace();                // 原位构造
.pop();                    // 弹出栈顶
.push();                   // 压入
.size();                   // 元素数
.swap();                   // 交换
.top();                    // 栈顶引用

operator=                  // 赋值
```

list 教
```C++
.assign();                 // 替换内容
.back();                   // 末元素
.begin();                  // 首迭代器
.cbegin();                 // 常量首
.cend();                   // 常量尾
.clear();                  // 清空
.crbegin();                // 反向常量首
.crend();                  // 反向常量尾
.empty();                  // 是否空
.end();                    // 尾迭代器
.erase();                  // 删除
.front();                  // 首元素
.get_allocator();          // 获取分配器
.insert();                 // 插入
.max_size();               // 最大容量
.merge();                  // 合并有序链表
.pop_back();               // 删除末元素
.pop_front();              // 删除首元素
.push_back();              // 添加末元素
.push_front();             // 添加首元素
.rbegin();                 // 反向首
.remove();                 // 删除指定值
.remove_if();              // 条件删除
.rend();                   // 反向尾
.resize();                 // 改变大小
.reverse();                // 反转
.size();                   // 元素数
.sort();                   // 排序
.splice();                 // 转移节点
.swap();                   // 交换
.unique();                 // 去重相邻

operator=                  // 赋值
```

multiset 教
```C++
// 成员与 set 基本相同，区别在于允许重复键
.begin();                  // 首迭代器
.cbegin();                 // 常量首
.cend();                   // 常量尾
.clear();                  // 清空
.contains();               // 是否含键(C++20)
.count();                  // 键计数（可>1）
.crbegin();                // 反向常量首
.crend();                  // 反向常量尾
.empty();                  // 是否空
.end();                    // 尾迭代器
.equal_range();            // 键区间
.erase();                  // 删除
.find();                   // 查找
.get_allocator();          // 获取分配器
.insert();                 // 插入
.key_comp();               // 比较函数
.lower_bound();            // 首个不小于键
.max_size();               // 最大容量
.rbegin();                 // 反向首
.rend();                   // 反向尾
.size();                   // 元素数
.swap();                   // 交换
.upper_bound();            // 首个大于键
.value_comp();             // 值比较函数

operator=                  // 赋值
```

multimap 教
```C++
// 允许重复键的 map
.begin();                  // 首迭代器
.cbegin();                 // 常量首
.cend();                   // 常量尾
.clear();                  // 清空
.contains();               // 是否含键(C++20)
.count();                  // 键计数
.crbegin();                // 反向常量首
.crend();                  // 反向常量尾
.empty();                  // 是否空
.end();                    // 尾迭代器
.equal_range();            // 键区间
.erase();                  // 删除
.find();                   // 查找
.get_allocator();          // 获取分配器
.insert();                 // 插入
.key_comp();               // 键比较函数
.lower_bound();            // 首个不小于键
.max_size();               // 最大容量
.rbegin();                 // 反向首
.rend();                   // 反向尾
.size();                   // 元素数
.swap();                   // 交换
.upper_bound();            // 首个大于键
.value_comp();             // 值比较函数

operator=                  // 赋值
```

unordered_set 教
```C++
.begin();                  // 首迭代器
.bucket();                 // 键所在桶索引
.bucket_count();           // 桶数量
.bucket_size();            // 桶内元素数
.cbegin();                 // 常量首
.cend();                   // 常量尾
.clear();                  // 清空
.contains();               // 是否含键(C++20)
.count();                  // 键计数
.crbegin();                // 反向常量首
.crend();                  // 反向常量尾
.empty();                  // 是否空
.end();                    // 尾迭代器
.equal_range();            // 键区间
.erase();                  // 删除
.find();                   // 查找
.get_allocator();          // 获取分配器
.insert();                 // 插入
.key_eq();                 // 相等函数
.load_factor();            // 负载因子
.max_bucket_count();       // 最大桶数
.max_load_factor();        // 最大负载因子
.max_size();               // 最大容量
.rehash();                 // 重哈希
.reserve();                // 预留桶
.size();                   // 元素数
.swap();                   // 交换

operator=                  // 赋值
```

unordered_map 教
```C++
.begin();                  // 首迭代器
.bucket();                 // 键所在桶
.bucket_count();           // 桶数量
.bucket_size();            // 桶内元素数
.cbegin();                 // 常量首
.cend();                   // 常量尾
.clear();                  // 清空
.contains();               // 是否含键
.count();                  // 键计数
.crbegin();                // 反向常量首
.crend();                  // 反向常量尾
.empty();                  // 是否空
.end();                    // 尾迭代器
.equal_range();            // 键区间
.erase();                  // 删除
.find();                   // 查找
.get_allocator();          // 获取分配器
.insert();                 // 插入
.key_eq();                 // 相等函数
.load_factor();            // 负载因子
.max_bucket_count();       // 最大桶数
.max_load_factor();        // 最大负载因子
.max_size();               // 最大容量
.rehash();                 // 重哈希
.reserve();                // 预留桶
.size();                   // 元素数
.swap();                   // 交换

operator=                  // 赋值
operator[]                 // 下标访问
.at()                      // 边界检查访问
```

unordered_multiset 教
```C++
// 允许重复的无序集合
.begin();                  // 首迭代器
.bucket();                 // 桶索引
.bucket_count();           // 桶数量
.bucket_size();            // 桶内大小
.cbegin();                 // 常量首
.cend();                   // 常量尾
.clear();                  // 清空
.contains();               // 是否含键
.count();                  // 键计数（可>1）
.crbegin();                // 反向常量首
.crend();                  // 反向常量尾
.empty();                  // 是否空
.end();                    // 尾迭代器
.equal_range();            // 键区间
.erase();                  // 删除
.find();                   // 查找
.get_allocator();          // 获取分配器
.insert();                 // 插入
.key_eq();                 // 相等函数
.load_factor();            // 负载因子
.max_bucket_count();       // 最大桶数
.max_load_factor();        // 最大负载因子
.max_size();               // 最大容量
.rehash();                 // 重哈希
.reserve();                // 预留桶
.size();                   // 元素数
.swap();                   // 交换

operator=                  // 赋值
```

unordered_multimap 教
```C++
// 允许重复键的无序映射
.begin();                  // 首迭代器
.bucket();                 // 桶索引
.bucket_count();           // 桶数量
.bucket_size();            // 桶内大小
.cbegin();                 // 常量首
.cend();                   // 常量尾
.clear();                  // 清空
.contains();               // 是否含键
.count();                  // 键计数
.crbegin();                // 反向常量首
.crend();                  // 反向常量尾
.empty();                  // 是否空
.end();                    // 尾迭代器
.equal_range();            // 键区间
.erase();                  // 删除
.find();                   // 查找
.get_allocator();          // 获取分配器
.insert();                 // 插入
.key_eq();                 // 相等函数
.load_factor();            // 负载因子
.max_bucket_count();       // 最大桶数
.max_load_factor();        // 最大负载因子
.max_size();               // 最大容量
.rehash();                 // 重哈希
.reserve();                // 预留桶
.size();                   // 元素数
.swap();                   // 交换

operator=                  // 赋值
```

deque 教
```C++
.assign();                 // 替换内容
.at();                     // 边界检查访问
.back();                   // 末元素
.begin();                  // 首迭代器
.cbegin();                 // 常量首
.cend();                   // 常量尾
.clear();                  // 清空
.crbegin();                // 反向常量首
.crend();                  // 反向常量尾
.empty();                  // 是否空
.end();                    // 尾迭代器
.erase();                  // 删除
.front();                  // 首元素
.get_allocator();          // 获取分配器
.insert();                 // 插入
.max_size();               // 最大容量
.pop_back();               // 删除末元素
.pop_front();              // 删除首元素
.push_back();              // 添加末元素
.push_front();             // 添加首元素
.rbegin();                 // 反向首
.rend();                   // 反向尾
.resize();                 // 改变大小
.shrink_to_fit();          // 释放多余内存
.size();                   // 元素数
.swap();                   // 交换

operator=                  // 赋值
operator[]                 // 下标访问
```

forward_list 教
```C++
.assign();                 // 替换内容
.before_begin();           // 首元素前迭代器
.begin();                  // 首迭代器
.cbegin();                 // 常量首
.cend();                   // 常量尾
.clear();                  // 清空
.empty();                  // 是否空
.end();                    // 尾迭代器
.erase_after();            // 删除之后
.front();                  // 首元素
.get_allocator();          // 获取分配器
.insert_after();           // 之后插入
.max_size();               // 最大容量
.merge();                  // 合并有序
.pop_front();              // 删除首元素
.push_front();             // 添加首元素
.remove();                 // 删除指定值
.remove_if();              // 条件删除
.resize();                 // 改变大小
.reverse();                // 反转
.sort();                   // 排序
.splice_after();           // 转移节点之后
.swap();                   // 交换
.unique();                 // 去重相邻

operator=                  // 赋值
```

array 教
```C++
.at();                     // 边界检查访问
.back();                   // 末元素
.begin();                  // 首迭代器
.cbegin();                 // 常量首
.cend();                   // 常量尾
.crbegin();                // 反向常量首
.crend();                  // 反向常量尾
.data();                   // 底层指针
.empty();                  // 是否空（始终false）
.end();                    // 尾迭代器
.fill();                   // 填充值
.front();                  // 首元素
.max_size();               // 最大容量（固定）
.rbegin();                 // 反向首
.rend();                   // 反向尾
.size();                   // 元素数
.swap();                   // 交换

operator=                  // 赋值
operator[]                 // 下标访问
```

basic_string 教（模板，与 string 成员完全相同，略）awa

priority_queue 教
```C++
.empty();                  // 是否空
.emplace();                // 原位构造
.pop();                    // 弹出堆顶
.push();                   // 插入
.size();                   // 元素数
.swap();                   // 交换
.top();                    // 堆顶引用

operator=                  // 赋值
```

pair 教
```C++
// 成员数据: .first, .second（不是函数）
.swap();                   // 交换两个pair

operator=                  // 赋值
operator==                 // 相等比较
operator!=                 // 不等比较
operator<                  // 小于比较
operator<=                 // 小于等于
operator>                  // 大于
operator>=                 // 大于等于
```

tuple 教
```C++
.swap();                   // 交换内容

operator=                  // 赋值
```

optional 教
```C++
.emplace();                // 原位构造值
.has_value();              // 是否有值
.reset();                  // 销毁值
.swap();                   // 交换
.value();                  // 取值（抛异常）
.value_or();               // 取值或默认

operator bool              // 是否含有值
operator*                  // 解引用
operator->                 // 成员访问
operator=                  // 赋值
operator==                 // 相等比较
operator!=                 // 不等比较
operator<                  // 小于
operator<=                 // 小于等于
operator>                  // 大于
operator>=                 // 大于等于
```

variant 教
```C++
.emplace();                // 原位构造
.index();                  // 当前类型索引
.swap();                   // 交换
.valueless_by_exception(); // 是否无值

operator=                  // 赋值
operator==                 // 相等比较
operator!=                 // 不等比较
operator<                  // 小于
operator<=                 // 小于等于
operator>                  // 大于
operator>=                 // 大于等于
```

any 教
```C++
.has_value();              // 是否含值
.reset();                  // 销毁值
.swap();                   // 交换

operator=                  // 赋值
operator==                 // 相等比较（需类型相同）
operator!=                 // 不等比较
```

initializer_list 教
```C++
.size();                   // 元素个数
.begin();                  // 首迭代器
.end();                    // 尾迭代器

operator=                  // 赋值（编译器生成）
```

string_view 教
```C++
.back();                   // 末字符
.begin();                  // 首迭代器
.cbegin();                 // 常量首
.cend();                   // 常量尾
.compare();                // 比较
.contains();               // 包含子串(C++23)
.copy();                   // 拷贝到缓冲区
.crbegin();                // 反向常量首
.crend();                  // 反向常量尾
.data();                   // 底层字符指针
.empty();                  // 是否空
.end();                    // 尾迭代器
.ends_with();              // 后缀匹配(C++20)
.find();                   // 正向查找
.find_first_not_of();      // 首个不在集合中
.find_first_of();          // 首个在集合中
.find_last_not_of();       // 末个不在集合中
.find_last_of();           // 末个在集合中
.front();                  // 首字符
.length();                 // 长度
.max_size();               // 最大长度
.rbegin();                 // 反向首
.remove_prefix();          // 移除前缀
.remove_suffix();          // 移除后缀
.rend();                   // 反向尾
.rfind();                  // 反向查找
.size();                   // 长度
.starts_with();            // 前缀匹配(C++20)
.substr();                 // 子串
.swap();                   // 交换

operator=                  // 赋值
operator[]                 // 下标访问
operator std::basic_string_view // 转换（自身）
```

span 教
```C++
.back();                   // 末元素
.begin();                  // 首迭代器
.cbegin();                 // 常量首
.cend();                   // 常量尾
.data();                   // 底层指针
.empty();                  // 是否空
.end();                    // 尾迭代器
.front();                  // 首元素
.rbegin();                 // 反向首
.rend();                   // 反向尾
.size();                   // 元素数
.subspan();                // 子区间

operator=                  // 赋值
operator[]                 // 下标访问
```
```txt
类型教
int                 范围: -2,147,483,648 ~ 2,147,483,647              说明: 标准32位有符号整数
__int32             范围: -2,147,483,648 ~ 2,147,483,647              说明: MSVC扩展32位有符号整数
__int64             范围: -9,223,372,036,854,775,808 ~ 9,223,372,036,854,775,807  说明: MSVC扩展64位有符号整数
__int128            范围: 约 -1.7e38 ~ 1.7e38                         说明: GCC/Clang扩展128位整数
size_t              范围: 0 ~ 平台最大（32位:4G, 64位:16E）           说明: 无符号内存大小/索引类型
time_t              范围: 平台相关（通常32位或64位有符号）           说明: 日历时间戳类型（秒）
float               范围: ±1.18e-38 ~ ±3.4e38（6位有效数字）         说明: 单精度浮点数
long long           范围: -9,223,372,036,854,775,808 ~ 9,223,372,036,854,775,807  说明: 标准64位有符号整数
long double         范围: 平台相关（x86: ±3.36e-4932 ~ ±1.18e4932） 说明: 扩展精度浮点数（常为80位）
char                范围: -128~127 或 0~255（实现定义）              说明: 最小可寻址单元（1字节）
long                范围: 32位:同int; 64位:通常8字节有符号          说明: 有符号长整数（长度依赖平台）
bool                范围: true 或 false                               说明: 布尔逻辑值
int8_t              范围: -128 ~ 127                                  说明: 确切8位有符号整数
int16_t             范围: -32,768 ~ 32,767                            说明: 确切16位有符号整数
int32_t             范围: -2,147,483,648 ~ 2,147,483,647              说明: 确切32位有符号整数
int64_t             范围: -9,223,372,036,854,775,808 ~ 9,223,372,036,854,775,807  说明: 确切64位有符号整数
uint8_t             范围: 0 ~ 255                                     说明: 确切8位无符号整数
uint16_t            范围: 0 ~ 65,535                                  说明: 确切16位无符号整数
uint32_t            范围: 0 ~ 4,294,967,295                           说明: 确切32位无符号整数
uint64_t            范围: 0 ~ 18,446,744,073,709,551,615              说明: 确切64位无符号整数
char8_t             范围: 0 ~ 255（C++20）                           说明: UTF-8 代码单元
char16_t            范围: 0 ~ 65,535（C++11）                        说明: UTF-16 代码单元
char32_t            范围: 0 ~ 4,294,967,295（C++11）                 说明: UTF-32 代码单元
wchar_t             范围: 平台相关（Win:16位, Linux:32位）           说明: 宽字符类型（编码依赖平台）
nullptr_t           范围: 仅 nullptr（空指针）                       说明: 空指针字面量类型
ptrdiff_t           范围: 平台相关（有符号，指针差值）               说明: 指针相减结果类型
```
算法教😠
```C++
// 递归
template<typename T>
T recursion(T n) {
    if (n <= 1) return n;        // 基准情况
    return recursion(n - 1);     // 递归调用
}

// 递推
template<typename T>
T iteration(T n) {
    vector<T> dp(n+1);
    dp[0] = 0; dp[1] = 1;
    for (int i = 2; i <= n; ++i)
        dp[i] = dp[i-1] + dp[i-2];   // 递推公式
    return dp[n];
}

// 模拟
template<typename Input, typename Output>
void simulate(Input& in, Output& out) {
    // 按照题目要求逐步模拟过程
    for (auto& e : in) {
        // 模拟每一步操作
    }
}

// 前缀和
template<typename T>
vector<T> prefix_sum(const vector<T>& arr) {
    vector<T> pref(arr.size()+1, 0);
    for (size_t i = 0; i < arr.size(); ++i)
        pref[i+1] = pref[i] + arr[i];
    return pref;
}

// 差分
template<typename T>
vector<T> difference(const vector<T>& arr) {
    vector<T> diff(arr.size(), 0);
    diff[0] = arr[0];
    for (size_t i = 1; i < arr.size(); ++i)
        diff[i] = arr[i] - arr[i-1];
    return diff;
}

// 二分（整数）
int binary_search(const vector<int>& arr, int target) {
    int lo = 0, hi = arr.size()-1;
    while (lo <= hi) {
        int mid = lo + (hi - lo)/2;
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) lo = mid+1;
        else hi = mid-1;
    }
    return -1;
}

// 回溯
void backtrack(vector<int>& state, int start, vector<vector<int>>& result) {
    // 剪枝条件
    if (/* 满足结束条件 */) {
        result.push_back(state);
        return;
    }
    for (int i = start; i < n; ++i) {
        state.push_back(i);      // 做选择
        backtrack(state, i+1, result);
        state.pop_back();        // 撤销选择
    }
}

// 贪心
template<typename Item>
int greedy(const vector<Item>& items, int capacity) {
    sort(items.begin(), items.end(), compare_by_ratio);
    int total = 0, weight = 0;
    for (auto& item : items) {
        if (weight + item.weight <= capacity) {
            weight += item.weight;
            total += item.value;
        }
    }
    return total;
}

// 位运算常用技巧
int bit_operations(int x, int y) {
    // 检查第k位: (x>>k)&1
    // 设置第k位: x |= (1<<k)
    // 清除第k位: x &= ~(1<<k)
    // 最低位1: x & -x
    return x ^ y;   // 示例：异或
}

// 动态规划-背包（0/1背包）
int knapsack01(int W, const vector<int>& wt, const vector<int>& val) {
    vector<int> dp(W+1, 0);
    for (int i = 0; i < wt.size(); ++i)
        for (int w = W; w >= wt[i]; --w)
            dp[w] = max(dp[w], dp[w-wt[i]] + val[i]);
    return dp[W];
}

// 线性/二维DP
int linear_dp(const vector<int>& arr) {
    int n = arr.size();
    vector<int> dp(n, 1);
    for (int i = 1; i < n; ++i)
        for (int j = 0; j < i; ++j)
            if (arr[j] < arr[i]) dp[i] = max(dp[i], dp[j]+1);
    return *max_element(dp.begin(), dp.end());
}

// 区间DP
int interval_dp(const vector<int>& arr) {
    int n = arr.size();
    vector<vector<int>> dp(n, vector<int>(n, 0));
    for (int len = 2; len <= n; ++len)
        for (int i = 0; i+len <= n; ++i) {
            int j = i+len-1;
            dp[i][j] = max(dp[i+1][j], dp[i][j-1]) + arr[i]; // 示例
        }
    return dp[0][n-1];
}

// A* 算法（节点结构省略）
template<typename T>
void a_star(const T& start, const T& goal) {
    priority_queue<Node> openSet;
    unordered_map<T, T> cameFrom;
    unordered_map<T, double> gScore, fScore;
    openSet.push(start);
    while (!openSet.empty()) {
        auto current = openSet.top(); openSet.pop();
        if (current == goal) break;
        for (auto& neighbor : neighbors(current)) {
            double tentative_g = gScore[current] + dist(current, neighbor);
            if (tentative_g < gScore[neighbor]) {
                cameFrom[neighbor] = current;
                gScore[neighbor] = tentative_g;
                fScore[neighbor] = gScore[neighbor] + heuristic(neighbor, goal);
                openSet.push(neighbor);
            }
        }
    }
}

// Dijkstra
using pii = pair<int, int>;
vector<int> dijkstra(const vector<vector<pii>>& graph, int src) {
    vector<int> dist(graph.size(), INF);
    priority_queue<pii, vector<pii>, greater<pii>> pq;
    dist[src] = 0; pq.push({0, src});
    while (!pq.empty()) {
        auto [d, u] = pq.top(); pq.pop();
        if (d > dist[u]) continue;
        for (auto [v, w] : graph[u]) {
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                pq.push({dist[v], v});
            }
        }
    }
    return dist;
}

// Bellman-Ford
vector<int> bellman_ford(const vector<tuple<int,int,int>>& edges, int V, int src) {
    vector<int> dist(V, INF); dist[src] = 0;
    for (int i = 1; i < V; ++i)
        for (auto [u, v, w] : edges)
            if (dist[u] != INF && dist[u] + w < dist[v])
                dist[v] = dist[u] + w;
    // 检测负环
    for (auto [u, v, w] : edges)
        if (dist[u] != INF && dist[u] + w < dist[v]) return {}; // 有负环
    return dist;
}

// Floyd-Warshall
vector<vector<int>> floyd_warshall(const vector<vector<int>>& graph) {
    int V = graph.size();
    auto dist = graph;
    for (int k = 0; k < V; ++k)
        for (int i = 0; i < V; ++i)
            for (int j = 0; j < V; ++j)
                if (dist[i][k] != INF && dist[k][j] != INF)
                    dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j]);
    return dist;
}

// SPFA
vector<int> spfa(const vector<vector<pair<int,int>>>& graph, int src) {
    vector<int> dist(graph.size(), INF); dist[src] = 0;
    vector<bool> inq(graph.size(), false);
    queue<int> q; q.push(src); inq[src] = true;
    while (!q.empty()) {
        int u = q.front(); q.pop(); inq[u] = false;
        for (auto [v, w] : graph[u]) {
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                if (!inq[v]) q.push(v), inq[v] = true;
            }
        }
    }
    return dist;
}

// Kruskal
struct DSU { /* 并查集实现 */ };
int kruskal(vector<tuple<int,int,int>>& edges, int V) {
    sort(edges.begin(), edges.end()); // 按权值排序
    DSU dsu(V);
    int mst_weight = 0, cnt = 0;
    for (auto [w,u,v] : edges) {
        if (dsu.unite(u,v)) {
            mst_weight += w;
            if (++cnt == V-1) break;
        }
    }
    return mst_weight;
}

// Prim
int prim(const vector<vector<pair<int,int>>>& graph, int src) {
    int V = graph.size();
    vector<int> minDist(V, INF);
    vector<bool> inMST(V, false);
    priority_queue<pii, vector<pii>, greater<pii>> pq;
    minDist[src] = 0; pq.push({0, src});
    int total = 0;
    while (!pq.empty()) {
        auto [w, u] = pq.top(); pq.pop();
        if (inMST[u]) continue;
        inMST[u] = true; total += w;
        for (auto [v, weight] : graph[u]) {
            if (!inMST[v] && weight < minDist[v]) {
                minDist[v] = weight;
                pq.push({weight, v});
            }
        }
    }
    return total;
}

// 拓扑排序
vector<int> topological_sort(const vector<vector<int>>& graph) {
    int V = graph.size();
    vector<int> indegree(V, 0);
    for (int u = 0; u < V; ++u)
        for (int v : graph[u]) ++indegree[v];
    queue<int> q;
    for (int i = 0; i < V; ++i) if (indegree[i]==0) q.push(i);
    vector<int> order;
    while (!q.empty()) {
        int u = q.front(); q.pop();
        order.push_back(u);
        for (int v : graph[u]) if (--indegree[v]==0) q.push(v);
    }
    return order.size()==V ? order : vector<int>();
}

// 强连通分量 (Tarjan)
void tarjan(int u, const vector<vector<int>>& graph, vector<int>& dfn, vector<int>& low, stack<int>& stk, vector<bool>& inStack, vector<vector<int>>& sccs) {
    static int time = 0;
    dfn[u] = low[u] = ++time;
    stk.push(u); inStack[u] = true;
    for (int v : graph[u]) {
        if (!dfn[v]) {
            tarjan(v, graph, dfn, low, stk, inStack, sccs);
            low[u] = min(low[u], low[v]);
        } else if (inStack[v]) {
            low[u] = min(low[u], dfn[v]);
        }
    }
    if (dfn[u] == low[u]) {
        vector<int> comp;
        int top;
        do {
            top = stk.top(); stk.pop();
            inStack[top] = false;
            comp.push_back(top);
        } while (top != u);
        sccs.push_back(comp);
    }
}

// 欧拉路径（Hierholzer）
void hierholzer(int u, const vector<vector<int>>& graph, vector<int>& path) {
    for (int v : graph[u]) {
        // 删除边 u->v (需要边集标记)
        hierholzer(v, graph, path);
    }
    path.push_back(u);
}

// 哈密顿路径（回溯，NP-Hard，仅模板）
bool hamiltonian_path(int u, vector<bool>& visited, vector<int>& path, const vector<vector<int>>& graph) {
    if (path.size() == graph.size()) return true;
    for (int v : graph[u]) {
        if (!visited[v]) {
            visited[v] = true; path.push_back(v);
            if (hamiltonian_path(v, visited, path, graph)) return true;
            visited[v] = false; path.pop_back();
        }
    }
    return false;
}

// KMP 算法
vector<int> kmp(const string& s, const string& pat) {
    string concat = pat + '#' + s;
    vector<int> pi(concat.size(), 0);
    for (int i = 1; i < concat.size(); ++i) {
        int j = pi[i-1];
        while (j > 0 && concat[i] != concat[j]) j = pi[j-1];
        if (concat[i] == concat[j]) ++j;
        pi[i] = j;
    }
    vector<int> matches;
    for (int i = pat.size()+1; i < concat.size(); ++i)
        if (pi[i] == pat.size()) matches.push_back(i - 2*pat.size());
    return matches;
}

// Sunday 算法
int sunday(const string& text, const string& pat) {
    int n = text.size(), m = pat.size();
    unordered_map<char, int> shift;
    for (int i = 0; i < m; ++i) shift[pat[i]] = i;
    int i = 0;
    while (i <= n-m) {
        int j = 0;
        while (j < m && text[i+j] == pat[j]) ++j;
        if (j == m) return i;
        if (i+m >= n) return -1;
        char next = text[i+m];
        i += (shift.count(next) ? m - shift[next] : m+1);
    }
    return -1;
}

// Manacher 算法 (最长回文子串)
string manacher(const string& s) {
    string t = "#";
    for (char c : s) t += c, t += '#';
    vector<int> p(t.size(), 0);
    int center = 0, right = 0;
    for (int i = 0; i < t.size(); ++i) {
        int mirror = 2*center - i;
        if (i < right) p[i] = min(right - i, p[mirror]);
        while (i-1-p[i] >= 0 && i+1+p[i] < t.size() && t[i-1-p[i]] == t[i+1+p[i]]) ++p[i];
        if (i + p[i] > right) { center = i; right = i + p[i]; }
    }
    // 提取最长回文子串
    int pos = max_element(p.begin(), p.end()) - p.begin();
    return s.substr((pos - p[pos])/2, p[pos]);
}

// 马拉车（同 Manacher，略）awa

// Z函数
vector<int> z_function(const string& s) {
    int n = s.size();
    vector<int> z(n, 0);
    int l = 0, r = 0;
    for (int i = 1; i < n; ++i) {
        if (i <= r) z[i] = min(r-i+1, z[i-l]);
        while (i+z[i] < n && s[z[i]] == s[i+z[i]]) ++z[i];
        if (i+z[i]-1 > r) { l = i; r = i+z[i]-1; }
    }
    return z;
}

// 后缀数组（倍增法）
vector<int> build_suffix_array(const string& s) {
    // 简化骨架，实际需实现基数排序
    int n = s.size();
    vector<int> sa(n), rk(n), tmp(n);
    for (int i = 0; i < n; ++i) sa[i] = i, rk[i] = s[i];
    for (int k = 1; k < n; k <<= 1) {
        auto cmp = [&](int i, int j) {
            if (rk[i] != rk[j]) return rk[i] < rk[j];
            int ri = (i+k < n) ? rk[i+k] : -1;
            int rj = (j+k < n) ? rk[j+k] : -1;
            return ri < rj;
        };
        sort(sa.begin(), sa.end(), cmp);
        tmp[sa[0]] = 0;
        for (int i = 1; i < n; ++i)
            tmp[sa[i]] = tmp[sa[i-1]] + (cmp(sa[i-1], sa[i]) ? 1 : 0);
        rk.swap(tmp);
    }
    return sa;
}

// 后缀自动机 (SAM)
struct SAM {
    struct State { int len, link; map<char,int> next; };
    vector<State> st;
    int last;
    SAM() : st(1), last(0) { st[0].len = 0; st[0].link = -1; }
    void extend(char c) {
        int cur = st.size(); st.emplace_back(); st[cur].len = st[last].len + 1;
        int p = last;
        while (p != -1 && !st[p].next.count(c)) {
            st[p].next[c] = cur; p = st[p].link;
        }
        if (p == -1) st[cur].link = 0;
        else {
            int q = st[p].next[c];
            if (st[p].len + 1 == st[q].len) st[cur].link = q;
            else {
                int clone = st.size(); st.emplace_back(st[q]);
                st[clone].len = st[p].len + 1;
                while (p != -1 && st[p].next[c] == q) {
                    st[p].next[c] = clone; p = st[p].link;
                }
                st[q].link = st[cur].link = clone;
            }
        }
        last = cur;
    }
};

// AC自动机
struct ACAutomaton {
    struct Node { int fail; int next[26]; vector<int> output; };
    vector<Node> trie;
    ACAutomaton() : trie(1) {}
    void insert(const string& pat, int id) {
        int u = 0;
        for (char ch : pat) {
            int c = ch - 'a';
            if (!trie[u].next[c]) {
                trie[u].next[c] = trie.size();
                trie.emplace_back();
            }
            u = trie[u].next[c];
        }
        trie[u].output.push_back(id);
    }
    void build() {
        queue<int> q;
        for (int c = 0; c < 26; ++c)
            if (trie[0].next[c]) q.push(trie[0].next[c]);
        while (!q.empty()) {
            int u = q.front(); q.pop();
            for (int c = 0; c < 26; ++c) {
                int v = trie[u].next[c];
                if (v) {
                    trie[v].fail = trie[trie[u].fail].next[c];
                    q.push(v);
                } else {
                    trie[u].next[c] = trie[trie[u].fail].next[c];
                }
            }
        }
    }
};

// 回文自动机 (PAM)
struct PAM {
    struct Node { int len, fail, next[26]; };
    vector<Node> tree;
    string s;
    int last, n;
    PAM() : tree(2), last(0), n(0) {
        tree[0].len = -1; tree[0].fail = 0;
        tree[1].len = 0;  tree[1].fail = 0;
    }
    int get_fail(int x) {
        while (s[n - tree[x].len - 1] != s[n]) x = tree[x].fail;
        return x;
    }
    void extend(char ch) {
        s += ch;
        int c = ch - 'a';
        int cur = get_fail(last);
        if (!tree[cur].next[c]) {
            int now = tree.size(); tree.emplace_back();
            tree[now].len = tree[cur].len + 2;
            tree[now].fail = tree[get_fail(tree[cur].fail)].next[c];
            tree[cur].next[c] = now;
        }
        last = tree[cur].next[c];
        ++n;
    }
};

// 莫队
struct Query { int l, r, idx; };
vector<int> mo_algorithm(vector<Query>& queries, int n) {
    int block = sqrt(n);
    sort(queries.begin(), queries.end(), [block](const Query& a, const Query& b) {
        if (a.l/block != b.l/block) return a.l/block < b.l/block;
        return (a.l/block & 1) ? (a.r < b.r) : (a.r > b.r);
    });
    vector<int> ans(queries.size());
    int curL = 0, curR = -1;
    for (auto& q : queries) {
        while (curL > q.l) add(--curL);
        while (curR < q.r) add(++curR);
        while (curL < q.l) remove(curL++);
        while (curR > q.r) remove(curR--);
        ans[q.idx] = get_answer();
    }
    return ans;
}

// 分块（区间求和）
class SqrtDecomposition {
    vector<int> arr, block, lazy;
    int blockSize;
public:
    SqrtDecomposition(const vector<int>& a) {
        arr = a; blockSize = sqrt(a.size());
        block.resize((a.size()+blockSize-1)/blockSize, 0);
        for (int i = 0; i < a.size(); ++i) block[i/blockSize] += a[i];
    }
    void add(int l, int r, int val) {
        for (int i = l; i <= r; ) {
            if (i % blockSize == 0 && i+blockSize-1 <= r) {
                block[i/blockSize] += val * blockSize;
                lazy[i/blockSize] += val;
                i += blockSize;
            } else {
                arr[i] += val;
                block[i/blockSize] += val;
                ++i;
            }
        }
    }
    int sum(int l, int r) {
        int res = 0;
        for (int i = l; i <= r; ) {
            if (i % blockSize == 0 && i+blockSize-1 <= r) {
                res += block[i/blockSize];
                i += blockSize;
            } else {
                res += arr[i] + lazy[i/blockSize];
                ++i;
            }
        }
        return res;
    }
};

// CDQ分治（三维偏序计数）
struct Node { int a, b, c, cnt, res; };
void cdq(int l, int r, vector<Node>& nodes) {
    if (l == r) return;
    int mid = (l+r)/2;
    cdq(l, mid, nodes); cdq(mid+1, r, nodes);
    sort(nodes.begin()+l, nodes.begin()+mid+1, [](Node& x, Node& y){ return x.b < y.b; });
    sort(nodes.begin()+mid+1, nodes.begin()+r+1, [](Node& x, Node& y){ return x.b < y.b; });
    // BIT 维护 c 维
    int i = l, j = mid+1;
    while (j <= r) {
        while (i <= mid && nodes[i].b <= nodes[j].b) add(nodes[i].c, nodes[i].cnt), ++i;
        nodes[j].res += query(nodes[j].c);
        ++j;
    }
    // 清空 BIT
    for (int k = l; k < i; ++k) add(nodes[k].c, -nodes[k].cnt);
}

// 整体二分
void overall_binary(int l, int r, vector<Query>& queries, vector<int>& ans) {
    if (queries.empty()) return;
    if (l == r) { for (auto q : queries) ans[q.id] = l; return; }
    int mid = (l+r)/2;
    // 处理 mid 之前的操作
    vector<Query> left, right;
    for (auto& q : queries) {
        if (q.type == UPDATE) {
            if (q.val <= mid) { add(q.pos, q.val); left.push_back(q); }
            else right.push_back(q);
        } else {
            int cnt = query(q.r) - query(q.l-1);
            if (q.k <= cnt) left.push_back(q);
            else { q.k -= cnt; right.push_back(q); }
        }
    }
    // 回滚 BIT
    for (auto& q : left) if (q.type == UPDATE) add(q.pos, -q.val);
    overall_binary(l, mid, left, ans);
    overall_binary(mid+1, r, right, ans);
}

// 二分图匹配（匈牙利）
bool dfs(int u, vector<vector<int>>& graph, vector<bool>& visited, vector<int>& match) {
    for (int v : graph[u]) {
        if (!visited[v]) {
            visited[v] = true;
            if (match[v] == -1 || dfs(match[v], graph, visited, match)) {
                match[v] = u; return true;
            }
        }
    }
    return false;
}
int hungarian(int n, int m, vector<vector<int>>& graph) {
    vector<int> match(m+1, -1);
    int res = 0;
    for (int u = 1; u <= n; ++u) {
        vector<bool> visited(m+1, false);
        if (dfs(u, graph, visited, match)) ++res;
    }
    return res;
}

// 最大流 (Dinic)
struct Dinic {
    struct Edge { int v, cap, rev; };
    vector<vector<Edge>> graph;
    vector<int> level, iter;
    Dinic(int n) : graph(n), level(n), iter(n) {}
    void add_edge(int u, int v, int cap) {
        graph[u].push_back({v, cap, (int)graph[v].size()});
        graph[v].push_back({u, 0, (int)graph[u].size()-1});
    }
    void bfs(int s) { /* BFS 构建层次图 */ }
    int dfs(int u, int t, int f) { /* DFS 多路增广 */ }
    int max_flow(int s, int t) {
        int flow = 0;
        while (bfs(s), level[t] >= 0) {
            fill(iter.begin(), iter.end(), 0);
            int f;
            while ((f = dfs(s, t, INF)) > 0) flow += f;
        }
        return flow;
    }
};

// 最小割（最大流最小割定理，同最大流）

// 费用流 (最小费用最大流 - SPFA)
struct MinCostMaxFlow {
    struct Edge { int v, cap, cost, rev; };
    vector<vector<Edge>> graph;
    vector<int> dist, prevv, preve;
    MinCostMaxFlow(int n) : graph(n), dist(n), prevv(n), preve(n) {}
    void add_edge(int u, int v, int cap, int cost) {
        graph[u].push_back({v, cap, cost, (int)graph[v].size()});
        graph[v].push_back({u, 0, -cost, (int)graph[u].size()-1});
    }
    int min_cost_flow(int s, int t, int f) {
        int res = 0;
        while (f > 0) {
            // SPFA 找最短路
            fill(dist.begin(), dist.end(), INF); dist[s] = 0;
            vector<bool> inq(graph.size(), false); queue<int> q; q.push(s);
            while (!q.empty()) {
                int u = q.front(); q.pop(); inq[u] = false;
                for (int i = 0; i < graph[u].size(); ++i) {
                    auto& e = graph[u][i];
                    if (e.cap > 0 && dist[e.v] > dist[u] + e.cost) {
                        dist[e.v] = dist[u] + e.cost;
                        prevv[e.v] = u; preve[e.v] = i;
                        if (!inq[e.v]) { inq[e.v] = true; q.push(e.v); }
                    }
                }
            }
            if (dist[t] == INF) return -1;
            int d = f;
            for (int v = t; v != s; v = prevv[v])
                d = min(d, graph[prevv[v]][preve[v]].cap);
            f -= d; res += d * dist[t];
            for (int v = t; v != s; v = prevv[v]) {
                auto& e = graph[prevv[v]][preve[v]];
                e.cap -= d;
                graph[e.v][e.rev].cap += d;
            }
        }
        return res;
    }
};

// KM算法（二分图最大权完美匹配）
int km(const vector<vector<int>>& w, int n) {
    // 复杂度 O(n^3), 需实现标杆、slack等
    vector<int> lx(n), ly(n), match(n), slack(n);
    vector<bool> visx(n), visy(n);
    // 具体实现略，仅框架
    // ...
    return max_weight;
}

// 快速幂
template<typename T>
T qpow(T a, long long b) {
    T res = 1;
    while (b) {
        if (b & 1) res = res * a;
        a = a * a;
        b >>= 1;
    }
    return res;
}

// 矩阵快速幂
struct Matrix {
    vector<vector<long long>> mat;
    int n;
    Matrix(int sz) : n(sz), mat(sz, vector<long long>(sz, 0)) {}
    Matrix operator*(const Matrix& other) const {
        Matrix res(n);
        for (int i = 0; i < n; ++i)
            for (int k = 0; k < n; ++k)
                if (mat[i][k]) for (int j = 0; j < n; ++j)
                    res.mat[i][j] = (res.mat[i][j] + mat[i][k] * other.mat[k][j]) % MOD;
        return res;
    }
};
Matrix mat_pow(Matrix a, long long b) {
    Matrix res(a.n);
    for (int i = 0; i < a.n; ++i) res.mat[i][i] = 1;
    while (b) {
        if (b & 1) res = res * a;
        a = a * a;
        b >>= 1;
    }
    return res;
}

// FFT (快速傅里叶变换)
using cd = complex<double>;
void fft(vector<cd>& a, bool invert) {
    int n = a.size();
    for (int i = 1, j = 0; i < n; ++i) {
        int bit = n >> 1;
        for (; j & bit; bit >>= 1) j ^= bit;
        j ^= bit;
        if (i < j) swap(a[i], a[j]);
    }
    for (int len = 2; len <= n; len <<= 1) {
        double ang = 2 * M_PI / len * (invert ? -1 : 1);
        cd wlen(cos(ang), sin(ang));
        for (int i = 0; i < n; i += len) {
            cd w(1);
            for (int j = 0; j < len/2; ++j) {
                cd u = a[i+j], v = a[i+j+len/2] * w;
                a[i+j] = u + v;
                a[i+j+len/2] = u - v;
                w *= wlen;
            }
        }
    }
    if (invert) for (cd& x : a) x /= n;
}
vector<int> multiply(vector<int> const& a, vector<int> const& b) {
    vector<cd> fa(a.begin(), a.end()), fb(b.begin(), b.end());
    int n = 1; while (n < a.size() + b.size()) n <<= 1;
    fa.resize(n); fb.resize(n);
    fft(fa, false); fft(fb, false);
    for (int i = 0; i < n; ++i) fa[i] *= fb[i];
    fft(fa, true);
    vector<int> result(n);
    for (int i = 0; i < n; ++i) result[i] = round(fa[i].real());
    return result;
}

// NTT (数论变换)
// 需选取原根和模数，如 998244353，原根 3
void ntt(vector<long long>& a, bool invert, int mod, int root) {
    // 与 FFT 类似，使用原根替代复数
}

// 中国剩余定理
long long crt(const vector<long long>& a, const vector<long long>& m) {
    long long M = 1, ans = 0;
    for (long long mod : m) M *= mod;
    for (size_t i = 0; i < a.size(); ++i) {
        long long Mi = M / m[i];
        long long inv = mod_inv(Mi, m[i]);
        ans = (ans + a[i] * Mi % M * inv) % M;
    }
    return ans;
}

// 扩展欧几里得
long long exgcd(long long a, long long b, long long& x, long long& y) {
    if (b == 0) { x = 1; y = 0; return a; }
    long long g = exgcd(b, a % b, y, x);
    y -= a / b * x;
    return g;
}

// 欧拉筛 (线性筛)
vector<int> euler_sieve(int n) {
    vector<int> primes;
    vector<bool> is_prime(n+1, true);
    for (int i = 2; i <= n; ++i) {
        if (is_prime[i]) primes.push_back(i);
        for (int p : primes) {
            if (i * p > n) break;
            is_prime[i * p] = false;
            if (i % p == 0) break;
        }
    }
    return primes;
}

// 线性基
struct LinearBasis {
    vector<long long> base;
    void insert(long long x) {
        for (int i = 63; i >= 0; --i) {
            if (!(x >> i)) continue;
            if (!base[i]) { base[i] = x; break; }
            x ^= base[i];
        }
    }
    long long query_max() {
        long long res = 0;
        for (int i = 63; i >= 0; --i)
            if ((res ^ base[i]) > res) res ^= base[i];
        return res;
    }
};

// 高斯消元（浮点版）
vector<double> gauss(vector<vector<double>> a, vector<double> b) {
    int n = a.size();
    for (int i = 0; i < n; ++i) {
        int pivot = i;
        for (int j = i+1; j < n; ++j)
            if (fabs(a[j][i]) > fabs(a[pivot][i])) pivot = j;
        swap(a[i], a[pivot]); swap(b[i], b[pivot]);
        if (fabs(a[i][i]) < eps) continue;
        for (int j = i+1; j < n; ++j) {
            double factor = a[j][i] / a[i][i];
            for (int k = i; k < n; ++k) a[j][k] -= factor * a[i][k];
            b[j] -= factor * b[i];
        }
    }
    vector<double> x(n);
    for (int i = n-1; i >= 0; --i) {
        x[i] = b[i];
        for (int j = i+1; j < n; ++j) x[i] -= a[i][j] * x[j];
        x[i] /= a[i][i];
    }
    return x;
}

// 单纯形法（线性规划）
// 标准形式：max c^T x, s.t. Ax <= b, x >= 0
// 此模板为简化版，需要实现 pivot 和 simplex 函数
void simplex(vector<vector<double>>& A, vector<double>& b, vector<double>& c) {
    // 略，实现较复杂
}

// 模拟退火
double simulated_annealing(double (*energy)(vector<double>&), vector<double>& state) {
    double T = 1e5, T_min = 1e-6, alpha = 0.999;
    double cur_energy = energy(state);
    while (T > T_min) {
        vector<double> new_state = state;
        // 随机扰动
        double delta = energy(new_state) - cur_energy;
        if (delta < 0 || exp(-delta/T) > rand()/RAND_MAX) {
            state = new_state;
            cur_energy = energy(state);
        }
        T *= alpha;
    }
    return cur_energy;
}

// 遗传算法（框架）
void genetic_algorithm() {
    // 初始化种群
    // 选择、交叉、变异
    // 迭代
}

// 粒子群
void particle_swarm() {
    // 粒子位置、速度更新
}

// 爬山法
int hill_climbing(int (*f)(int), int start) {
    int cur = start;
    while (true) {
        int best = cur;
        for (int dx : {-1, 1}) {
            int nxt = cur + dx;
            if (f(nxt) > f(best)) best = nxt;
        }
        if (best == cur) break;
        cur = best;
    }
    return cur;
}

// BFS
void bfs(int start, const vector<vector<int>>& graph) {
    vector<bool> visited(graph.size(), false);
    queue<int> q;
    visited[start] = true; q.push(start);
    while (!q.empty()) {
        int u = q.front(); q.pop();
        for (int v : graph[u]) {
            if (!visited[v]) {
                visited[v] = true;
                q.push(v);
            }
        }
    }
}

// DFS
void dfs(int u, const vector<vector<int>>& graph, vector<bool>& visited) {
    visited[u] = true;
    for (int v : graph[u]) {
        if (!visited[v]) dfs(v, graph, visited);
    }
}
```

