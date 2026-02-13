// ==================== 词库系统 ====================
const wordDatabase = {
    animals: [
        '小狗', '小猫', '兔子', '大象', '长颈鹿', '狮子', '老虎', '熊猫', '猴子', '斑马',
        '河马', '犀牛', '袋鼠', '考拉', '企鹅', '海豚', '鲸鱼', '鲨鱼', '金鱼', '乌龟',
        '蛇', '鳄鱼', '青蛙', '蝴蝶', '蜜蜂', '蚂蚁', '蜘蛛', '蜗牛', '螃蟹', '虾',
        '公鸡', '母鸡', '鸭子', '鹅', '鸽子', '麻雀', '老鹰', '猫头鹰', '孔雀', '鹦鹉',
        '天鹅', '火烈鸟', '松鼠', '刺猬', '浣熊', '狐狸', '狼', '鹿', '羊', '牛',
        '马', '驴', '骆驼', '猪', '老鼠', '仓鼠', '豚鼠', '海星', '水母', '章鱼'
    ],

    fruits: [
        '苹果', '香蕉', '西瓜', '草莓', '葡萄', '橙子', '柠檬', '梨', '桃子', '樱桃',
        '芒果', '菠萝', '猕猴桃', '火龙果', '榴莲', '山竹', '荔枝', '龙眼', '柚子', '橘子',
        '柿子', '石榴', '杨梅', '蓝莓', '树莓', '黑莓', '桑葚', '椰子', '木瓜', '番石榴',
        '百香果', '牛油果', '无花果', '枇杷', '杏子', '李子', '枣', '山楂', '哈密瓜', '甜瓜',
        '香瓜', '西柚', '青柠', '杨桃', '莲雾', '释迦', '红毛丹', '人参果', '雪莲果', '蔓越莓'
    ],

    stationery: [
        '铅笔', '橡皮', '尺子', '书包', '课本', '作业本', '钢笔', '圆珠笔', '水彩笔', '蜡笔',
        '彩色铅笔', '记号笔', '荧光笔', '毛笔', '墨水', '文具盒', '笔袋', '削笔刀', '卷笔刀', '胶水',
        '胶带', '双面胶', '订书机', '订书钉', '回形针', '图钉', '大头针', '剪刀', '美工刀', '计算器',
        '圆规', '三角尺', '量角器', '直尺', '软尺', '地球仪', '放大镜', '书签', '便利贴', '笔记本',
        '日记本', '画板', '画架', '调色盘', '颜料', '画笔', '素描本', '水彩纸', '橡皮泥', '黏土'
    ],

    furniture: [
        '桌子', '椅子', '床', '沙发', '柜子', '书架', '衣柜', '鞋柜', '茶几', '餐桌',
        '书桌', '办公桌', '梳妆台', '床头柜', '电视柜', '酒柜', '展示柜', '储物柜', '抽屉', '凳子',
        '躺椅', '摇椅', '折叠椅', '转椅', '吧台椅', '婴儿床', '上下床', '沙发床', '衣架', '鞋架',
        '毛巾架', '置物架', '花架', '屏风', '隔断', '窗帘', '地毯', '靠垫', '抱枕', '床单',
        '被子', '枕头', '毛毯', '床垫', '蚊帐', '台灯', '落地灯', '吊灯', '壁灯', '镜子'
    ],

    vehicles: [
        '汽车', '自行车', '摩托车', '公交车', '出租车', '火车', '高铁', '地铁', '飞机', '直升机',
        '轮船', '帆船', '游艇', '快艇', '潜水艇', '热气球', '滑翔伞', '卡车', '货车', '面包车',
        '吉普车', '跑车', '警车', '救护车', '消防车', '垃圾车', '洒水车', '拖拉机', '挖掘机', '推土机',
        '起重机', '压路机', '搅拌车', '电动车', '三轮车', '滑板车', '平衡车', '独轮车', '婴儿车', '购物车',
        '雪橇', '缆车', '观光车', '校车', '救生艇', '橡皮艇', '竹筏', '皮划艇', '滑雪板', '冲浪板'
    ],

    dailyItems: [
        '杯子', '碗', '盘子', '筷子', '勺子', '叉子', '刀', '锅', '铲子', '漏勺',
        '水壶', '茶壶', '保温杯', '饭盒', '便当盒', '牙刷', '牙膏', '毛巾', '浴巾', '香皂',
        '洗发水', '沐浴露', '洗面奶', '梳子', '镜子', '剃须刀', '吹风机', '拖鞋', '鞋子', '袜子',
        '衣服', '裤子', '裙子', '外套', '围巾', '帽子', '手套', '眼镜', '太阳镜', '雨伞',
        '雨衣', '背包', '钱包', '手表', '闹钟', '钥匙', '锁', '手机', '电脑', '平板',
        '电视', '遥控器', '空调', '风扇', '暖气', '冰箱', '洗衣机', '微波炉', '电饭煲', '烤箱'
    ],

    food: [
        '米饭', '面条', '馒头', '包子', '饺子', '馄饨', '汤圆', '粽子', '月饼', '蛋糕',
        '面包', '饼干', '薯片', '爆米花', '糖果', '巧克力', '冰淇淋', '果冻', '布丁', '酸奶',
        '牛奶', '豆浆', '果汁', '可乐', '雪碧', '奶茶', '咖啡', '茶', '鸡蛋', '鸭蛋',
        '鹌鹑蛋', '豆腐', '豆皮', '豆芽', '白菜', '萝卜', '土豆', '番茄', '黄瓜', '茄子',
        '辣椒', '青椒', '洋葱', '大蒜', '生姜', '玉米', '南瓜', '冬瓜', '丝瓜', '苦瓜'
    ],

    sports: [
        '足球', '篮球', '排球', '乒乓球', '羽毛球', '网球', '高尔夫球', '棒球', '橄榄球', '保龄球',
        '台球', '跑步', '跳绳', '跳高', '跳远', '游泳', '潜水', '滑冰', '滑雪', '滑板',
        '轮滑', '骑马', '射箭', '击剑', '拳击', '跆拳道', '柔道', '摔跤', '举重', '体操',
        '瑜伽', '太极拳', '武术', '攀岩', '蹦极', '跳伞', '冲浪', '帆板', '皮划艇', '赛艇',
        '自行车', '马拉松', '铁人三项', '登山', '徒步', '露营', '钓鱼', '风筝', '飞盘', '毽子'
    ],

    nature: [
        '太阳', '月亮', '星星', '云', '雨', '雪', '风', '雷', '闪电', '彩虹',
        '山', '河', '湖', '海', '瀑布', '泉水', '溪流', '池塘', '沙滩', '沙漠',
        '森林', '草原', '田野', '花园', '公园', '树', '花', '草', '叶子', '树枝',
        '树根', '种子', '果实', '玫瑰', '菊花', '荷花', '牡丹', '梅花', '兰花', '竹子',
        '松树', '柳树', '枫树', '银杏', '桂花', '樱花', '桃花', '梨花', '杏花', '油菜花'
    ],

    school: [
        '教室', '操场', '图书馆', '食堂', '宿舍', '办公室', '实验室', '音乐室', '美术室', '体育馆',
        '老师', '学生', '校长', '同学', '朋友', '课桌', '黑板', '粉笔', '板擦', '讲台',
        '课程表', '考试', '作业', '试卷', '成绩', '奖状', '红花', '小红旗', '校服', '红领巾',
        '书包', '铅笔盒', '水杯', '饭盒', '跳绳', '毽子', '皮球', '积木', '拼图', '玩具',
        '故事书', '童话', '寓言', '诗歌', '儿歌', '绕口令', '谜语', '脑筋急转弯', '成语', '古诗'
    ]
};

// ==================== 游戏状态管理 ====================
let gameState = {
    selectedTime: 60,
    currentTime: 60,
    score: 0,
    correctCount: 0,
    skipCount: 0,
    isPlaying: false,
    currentWord: '',
    currentCategory: '',
    usedWords: new Set(),
    allWords: [],
    timer: null,
    permissionGranted: false
};

// ==================== 初始化 ====================
document.addEventListener('DOMContentLoaded', () => {
    initializeGame();
    setupTimeButtons();
});

function initializeGame() {
    // 合并所有词库
    gameState.allWords = [];
    for (let category in wordDatabase) {
        wordDatabase[category].forEach(word => {
            gameState.allWords.push({
                word: word,
                category: getCategoryName(category)
            });
        });
    }

    console.log(`词库加载完成,共 ${gameState.allWords.length} 个词汇`);
}

function getCategoryName(category) {
    const names = {
        animals: '🐾 动物',
        fruits: '🍎 水果',
        stationery: '✏️ 文具',
        furniture: '🪑 家具',
        vehicles: '🚗 交通工具',
        dailyItems: '🏠 日常用品',
        food: '🍜 食物',
        sports: '⚽ 运动',
        nature: '🌳 自然',
        school: '🏫 校园'
    };
    return names[category] || '词语';
}

// ==================== 时间选择 ====================
function setupTimeButtons() {
    const timeButtons = document.querySelectorAll('.time-btn');
    timeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            timeButtons.forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            gameState.selectedTime = parseInt(btn.dataset.time);
        });
    });
}

// ==================== 游戏控制 ====================
function startGame() {
    // 请求设备方向权限(iOS 13+需要)
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission()
            .then(permissionState => {
                if (permissionState === 'granted') {
                    gameState.permissionGranted = true;
                    initGame();
                } else {
                    alert('需要允许访问设备方向才能使用重力感应功能哦!');
                }
            })
            .catch(console.error);
    } else {
        gameState.permissionGranted = true;
        initGame();
    }
}

function initGame() {
    // 重置游戏状态
    gameState.currentTime = gameState.selectedTime;
    gameState.score = 0;
    gameState.correctCount = 0;
    gameState.skipCount = 0;
    gameState.usedWords.clear();
    gameState.isPlaying = true;

    // 切换到游戏界面
    switchScreen('game-screen');

    // 显示第一个词
    showNextWord();

    // 开始倒计时
    startTimer();

    // 启动重力感应
    startMotionDetection();
}

function switchScreen(screenClass) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.querySelector(`.${screenClass}`).classList.add('active');
}

function showNextWord() {
    // 如果所有词都用过了,重置
    if (gameState.usedWords.size >= gameState.allWords.length) {
        gameState.usedWords.clear();
    }

    // 随机选择一个未使用的词
    let wordObj;
    do {
        wordObj = gameState.allWords[Math.floor(Math.random() * gameState.allWords.length)];
    } while (gameState.usedWords.has(wordObj.word));

    gameState.usedWords.add(wordObj.word);
    gameState.currentWord = wordObj.word;
    gameState.currentCategory = wordObj.category;

    // 显示词语
    document.getElementById('word').textContent = wordObj.word;
    document.getElementById('category').textContent = wordObj.category;
}

function startTimer() {
    updateTimerDisplay();

    gameState.timer = setInterval(() => {
        gameState.currentTime--;
        updateTimerDisplay();

        // 最后10秒警告
        if (gameState.currentTime <= 10) {
            document.getElementById('timer').classList.add('warning');
        }

        if (gameState.currentTime <= 0) {
            endGame();
        }
    }, 1000);
}

function updateTimerDisplay() {
    document.getElementById('timer').textContent = gameState.currentTime;
    document.getElementById('score').textContent = `${gameState.score}分`;
}

// ==================== 重力感应控制 ====================
let lastBeta = 0;
let deviceState = 'normal'; // 设备状态: normal(正常), tilted_up(向上倾斜), tilted_down(向下倾斜)
let cooldown = false;

function startMotionDetection() {
    window.addEventListener('deviceorientation', handleOrientation);
    // 重置状态
    deviceState = 'normal';
    lastBeta = 0;
    console.log('重力感应已启动');
}

function stopMotionDetection() {
    window.removeEventListener('deviceorientation', handleOrientation);
}

function handleOrientation(event) {
    if (!gameState.isPlaying || cooldown) return;

    const beta = event.beta; // 前后倾斜角度 (-180 到 180)
    // beta: 0 = 水平, 90 = 竖直向前, -90 = 竖直向后, 180/-180 = 倒置

    // 状态机逻辑
    if (deviceState === 'normal') {
        // 从正常状态检测翻转
        if (beta > 120) {
            // 手机向前翻超过120度(屏幕朝下) = 猜对
            deviceState = 'tilted_up';
            handleCorrect();
            cooldown = true;
            setTimeout(() => {
                cooldown = false;
                deviceState = 'normal';
            }, 1000);
        } else if (beta < -60) {
            // 手机向后翻超过60度(屏幕朝上) = 跳过
            deviceState = 'tilted_down';
            handleSkip();
            cooldown = true;
            setTimeout(() => {
                cooldown = false;
                deviceState = 'normal';
            }, 1000);
        }
    }

    lastBeta = beta;
}

function handleCorrect() {
    gameState.score += 10;
    gameState.correctCount++;
    showFeedback('✅ 答对了!');
    vibrateDevice(100);
    showNextWord();
    updateTimerDisplay();
}

function handleSkip() {
    gameState.skipCount++;
    showFeedback('⏭️ 跳过');
    vibrateDevice(50);
    showNextWord();
    updateTimerDisplay();
}

function showFeedback(text) {
    const feedback = document.getElementById('feedback');
    feedback.textContent = text;
    feedback.classList.add('show');

    setTimeout(() => {
        feedback.classList.remove('show');
    }, 600);
}

function vibrateDevice(duration) {
    if ('vibrate' in navigator) {
        navigator.vibrate(duration);
    }
}

// ==================== 游戏结束 ====================
function endGame() {
    gameState.isPlaying = false;
    clearInterval(gameState.timer);
    stopMotionDetection();

    // 显示结果
    document.getElementById('finalScore').textContent = gameState.score;
    document.getElementById('correctCount').textContent = gameState.correctCount;
    document.getElementById('skipCount').textContent = gameState.skipCount;

    switchScreen('end-screen');
}

function restartGame() {
    switchScreen('start-screen');
    document.getElementById('timer').classList.remove('warning');
}

// ==================== 键盘调试支持 ====================
// 在电脑上可以用键盘测试
document.addEventListener('keydown', (e) => {
    if (!gameState.isPlaying) return;

    if (e.key === 'ArrowUp') {
        handleCorrect();
    } else if (e.key === 'ArrowDown') {
        handleSkip();
    }
});
