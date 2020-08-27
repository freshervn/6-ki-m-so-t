var slideIndex = 0;
            var start = 0;
            function swap(direction) {
                //lay toan bo anh vao mang img
                img = document.getElementsByClassName("poster");
                //xoa anh hien tai di
                img[slideIndex].style.display = "none";
                // lay anh se trinh chieu

                slideIndex += direction;

                if (slideIndex < 0) { slideIndex = img.length - 1; };
                if (slideIndex == img.length) { slideIndex = 0; };
                //trinh chieu anh
                img[slideIndex].style.display = "block";
                t = setTimeout(swap, 2000, direction);
            }

            function smooth(s) {
                    clearTimeout(t);
                    swap(s);                
            }
            swap(1);