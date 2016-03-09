jQuery(document).ready(function($) {
    $('#pagepiling').pagepiling({
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
        navigation: {
            'textColor': '#f2f2f2',
            'bulletsColor': '#ccc',
            'position': 'right',
            scrollingspeed: 500,
            'tooltips': ["首页", "联系", "技能", "作品", "项目", "教育"]
        }
    });
});