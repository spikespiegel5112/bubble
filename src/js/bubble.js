(function($) {
	$(function() {
		var Bubble = function(radius) {
			var bubble = document.createElement('div');
			with(bubble.style) {
				width = height = (radius || 100) + 'px';
				position = 'absolute';
			}
			bubble.className = 'bubble';
			return bubble;
		}

		var Screen = function(config) {
			var that = this;
			config = $.extend({
				container: '',
				bubbleNum: 10
			}, config)
			that.container = $(config.container);
			that.balls = [];
			that.timer = null;
			that.bubbleNum = config.bubbleNum;
			that.diameter = 100;

			that.boundary_top = 0;
			that.boundary_bottom = that.container.height();
			that.boundary_left = 0;
			that.boundary_right = that.container.width();
		}

		Screen.prototype = {
			init: function() {
				var that = this;
				that.createBubbles();
				that.timer = setInterval(function() {
					that.hitTest();
				}, 100)
			},
			createBubbles: function() {
				var that = this,
					num = that.bubbleNum,
					i = 0;
				var frag = document.createDocumentFragment();
				for (; i < num; i++) {
					var factor = Math.random() * 3;
					if (factor < 1) {
						factor = 1;
					}
					console.log(factor)
					var bubble = new Bubble(that.diameter * factor / 2);
					bubble.style.left = (Math.random() * that.boundary_right)+'px';
					bubble.style.top = (Math.random() * that.boundary_bottom)+'px';
					frag.appendChild(bubble)
				};
				that.container.append(frag)
			},
			hitTest: function() {
				
			},
			move: function() {

			}
		}

		var screenInstance = new Screen({
			container: '.bubble_main_wrapper'
		})
		screenInstance.init();

	})
})(jQuery)
