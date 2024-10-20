const notification = document.querySelector('.nav-notifications-toggle');
        const settingButton = document.getElementById('settingsIcon');
        let rotated = false;

        notification.addEventListener('click', () => {
            if (rotated) {
                settingButton.style.transform = 'rotate(0deg)';
            } else {
                settingButton.style.transform = 'rotate(90deg)';
            }
            settingButton.style.transition = 'transform 0.5s';
            rotated = !rotated;
        });