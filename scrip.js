    // JavaScript để thực hiện chuyển đổi ảnh tự động
    const imageContainer = document.getElementById("image-container");
    const images = imageContainer.querySelectorAll("img");
    let currentImageIndex = 0;
    
    function changeImage() {
        images[currentImageIndex].style.transform = "translateX(-100%)";
        currentImageIndex = (currentImageIndex + 1) % images.length;
        if (currentImageIndex === 0) {
            // Nếu đang ở ảnh cuối cùng, đặt lại transform để quay lại ảnh đầu tiên
            images[images.length - 1].style.transform = "translateX(100%)";
        }
        images[currentImageIndex].style.transform = "translateX(0)";
    }
    
    setInterval(changeImage, 1500); // Chuyển đổi ảnh sau mỗi 1.5 giây (1500ms)
    
    
    function toggleContent(sectionId) {
        var content = document.getElementById(sectionId);
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    }
    
    function searchAndHighlight() {
        const searchTerm = document.getElementById("search-box").value.toLowerCase();
        const content = document.getElementById("content");
        const paragraphs = content.getElementsByTagName("p");
    
        for (let i = 0; i < paragraphs.length; i++) {
            const paragraphText = paragraphs[i].textContent.toLowerCase();
            if (paragraphText.includes(searchTerm)) {
                paragraphs[i].scrollIntoView({ behavior: "smooth" });
                paragraphs[i].innerHTML = paragraphText.replace(new RegExp(searchTerm, 'gi'), match => `<span class="highlighted">${match}</span>`);
            }
        }
    }