window.addEventListener('scroll', function() {
    const contents = document.querySelectorAll('.content'); // تحديد جميع العناصر التي تحتوي على المحتوى
    const screenPosition = window.innerHeight / 1.5; // النقطة التي يجب أن يبدأ عندها التأثير

    contents.forEach(body => {
        const contentPosition = content.getBoundingClientRect().top;

        if (contentPosition < screenPosition) {
            content.classList.add('visible'); // إضافة الفئة التي تجعل العنصر مرئيًا
        }
    });
});