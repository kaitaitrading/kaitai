// 弹窗逻辑
const modal = document.getElementById('productModal');
const modalImg = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const closeBtn = document.getElementById('closeModal');

// 全屏预览变量
const previewOverlay = document.getElementById("imagePreviewOverlay");
const previewImg = document.getElementById("previewImg");
const previewClose = document.getElementById("previewClose");

document.querySelectorAll('.product-img-box').forEach(box => {
box.addEventListener('click', function(){
const card = this.closest('.product-card');
modalImg.src = card.dataset.img;
modalTitle.textContent = card.dataset.title;
modalDesc.textContent = card.dataset.desc;
modal.classList.add('active');
document.body.style.overflow = 'hidden';
    })
})
function closeModalFunc(){
modal.classList.remove('active');
document.body.style.overflow = '';
}
closeBtn.addEventListener('click', closeModalFunc);
modal.addEventListener('click', function(e){
if(e.target === modal){
closeModalFunc();
    }
})

// 弹窗图片点击唤起全屏预览
modalImg.addEventListener("click", function(){
previewImg.src = this.src;
previewOverlay.classList.add("active");
});

// 点击预览图片自身关闭
previewImg.addEventListener("click", function(){
previewOverlay.classList.remove("active");
});
// 关闭按钮
previewClose.addEventListener("click", function(){
previewOverlay.classList.remove("active");
});
// 点击遮罩空白关闭
previewOverlay.addEventListener("click", function(e){
if(e.target === previewOverlay){
previewOverlay.classList.remove("active");
    }
});

// 页面内平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
const href = this.getAttribute('href');
if(href !== '#'){
const target = document.querySelector(href);
if(target) {
e.preventDefault();
const navHeight = document.querySelector('.navbar').offsetHeight || 80;
window.scrollTo({
top: target.getBoundingClientRect().top + window.scrollY - navHeight - 12,
behavior: 'smooth'
                });
            }
        }
    })
})

// ========== 下拉菜单核心JS ==========
const DROPDOWN_BREAKPOINT = 769;
const trigger = document.querySelector('.dropdown-trigger');
const menu = document.querySelector('.dropdown-menu');
let isMobileMode = window.innerWidth < DROPDOWN_BREAKPOINT;

function toggleDropdown() {
menu.classList.toggle('open');
}
function closeDropdown() {
menu.classList.remove('open');
}

trigger.addEventListener('click', function(e){
e.preventDefault();
toggleDropdown();
});

// 点击空白关闭下拉
document.addEventListener('click', function(e){
if(!e.target.closest('.nav-item-dropdown')){
closeDropdown();
    }
});

// 窗口缩放自动重置菜单
window.addEventListener('resize', function(){
const newMobile = window.innerWidth < DROPDOWN_BREAKPOINT;
if(newMobile !== isMobileMode){
isMobileMode = newMobile;
closeDropdown();
    }
});