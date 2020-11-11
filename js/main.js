$(window).on("load", function() {
	snow();
	hello();
	console.log(
		'            \n\
	 __     __      __   __   \n\
	|  |    \\ \\    / /  |  | \n\
	|  |     \\ \\  / /   |  |  \n\
	|  |      \\ \\/ /    |  |   \n\
	|  |       |  |     |  |      \n\
	|  |_____  |  |     |  |_____  \n\
	|________| |__|     |________|  \n\
    '
	);
});

function hello() {
	var h = new Date().getHours();
	var elm = $(".greet p");
	if (h < 10) {
		elm.text("早上好~");
	} else if (h > 17) {
		elm.text("晚上好~");
	}
	else{
		elm.text("你好~");
	}
}

function snow() {
	//1、定义一片雪花模板
	var flake = $("<div>").css({
		"position": "absolute",
		"color": "#fff"
	}).html("❄");

	//获取页面的宽度，利用这个数来算出，雪花开始时left的值
	var documentWidth = $(document).width();

	//获取页面的高度相当于雪花下落结束时Y轴的位置
	var documentHieght = $(document).height();

	//定义生成一片雪花的毫秒数
	var millisec = 400;
	//2、设置第一个定时器，周期性定时器，每隔一段时间（millisec）生成一片雪花；
	var snow_timer = setInterval(function() {
		//随机生成雪花下落开始时left的值，相当于开始时X轴的位置
		var startLeft = Math.random() * documentWidth;

		//随机生成雪花下落结束时left的值，相当于结束时X轴的位置
		var endLeft = Math.random() * documentWidth;

		//随机生成雪花大小
		var flakeSize = 15 + 15 * Math.random();

		//随机生成雪花下落持续时间
		var durationTime = 4000 + 7000 * Math.random();

		//随机生成雪花下落开始时的透明度
		var startOpacity = 0.7 + 0.3 * Math.random();

		//随机生成雪花下落结束时的透明度
		var endOpacity = 0.2 + 0.2 * Math.random();

		//3、克隆一个雪花模板,定义雪花的初始样式，拼接到页面中
		flake.clone().appendTo($("body")).css({
			"left": startLeft,
			"opacity": startOpacity,
			"font-size": flakeSize,
			"top": "-25px",
			"position": "fixed"
		}).animate({ //执行动画
			"left": endLeft,
			"opacity": endOpacity,
			"top": documentHieght
		}, durationTime, function() {
			//4、当雪花落下后，删除雪花。
			$(this).remove();
		});
	}, millisec);
};
