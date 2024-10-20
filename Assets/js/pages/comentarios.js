let commentIdCounter = 0;
        let commentToDelete = null;

        function addComment() {
            const commentContainer = document.getElementById('newCommentContainer');
            const commentText = commentContainer.innerHTML;
            if (commentText.trim() !== '') {
                const commentId = 'comment-' + commentIdCounter++;
                const commentElement = createCommentElement(commentId, commentText);
                document.getElementById('commentsList').appendChild(commentElement);
                commentContainer.innerHTML = '';
            }
        }

        function createCommentElement(commentId, commentText) {
            const commentElement = document.createElement('div');
            commentElement.id = commentId;
            commentElement.classList.add('p-4', 'mb-4', 'bg-white', 'rounded-lg', 'border', 'border-gray-300', 'shadow');

            commentElement.innerHTML = `
                <div class="flex justify-between items-center mb-2">
                    <div class="flex items-center">
                        <img src="https://via.placeholder.com/40" alt="avatar" class="rounded-full mr-2">
                        <div>
                            <span class="font-bold">Usuario</span>
                            <span class="text-gray-500 text-sm">1 d</span>
                        </div>
                    </div>
                    <button onclick="showConfirmationModal('${commentId}')" class="text-gray-500">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
                <div id="${commentId}-text" class="comment-text collapsed mb-2">
                    ${commentText}
                </div>
                <button onclick="toggleComment('${commentId}')" class="text-blue-500">Ver más</button>
                <div class="flex justify-between items-center mt-2">
                    <div class="flex space-x-2">
                        <button onclick="likeComment('${commentId}')" class="text-blue-500 flex items-center">
                            <i class="fas fa-thumbs-up"></i> <span id="${commentId}-likes" class="ml-1">0</span>
                        </button>
                        <button onclick="dislikeComment('${commentId}')" class="text-blue-500 flex items-center">
                            <i class="fas fa-thumbs-down"></i> <span id="${commentId}-dislikes" class="ml-1">0</span>
                        </button>
                        <button onclick="replyToComment('${commentId}')" class="text-blue-500"><i class="fa-solid fa-reply"></i></button>
                    </div>
                </div>
                <div id="${commentId}-replies" class="mt-4 space-y-4 pl-4 border-l-2 border-gray-300 hidden"></div>
            `;

            return commentElement;
        }

        function toggleComment(commentId) {
            const commentTextElement = document.getElementById(commentId + '-text');
            const button = commentTextElement.nextElementSibling;
            if (commentTextElement.classList.contains('collapsed')) {
                commentTextElement.classList.remove('collapsed');
                button.textContent = 'Ver menos';
            } else {
                commentTextElement.classList.add('collapsed');
                button.textContent = 'Ver más';
            }
        }

        function likeComment(commentId) {
            const likesElement = document.getElementById(commentId + '-likes');
            likesElement.textContent = parseInt(likesElement.textContent) + 1;
        }

        function dislikeComment(commentId) {
            const dislikesElement = document.getElementById(commentId + '-dislikes');
            dislikesElement.textContent = parseInt(dislikesElement.textContent) + 1;
        }

        function replyToComment(commentId) {
            const replyText = prompt('Escribe tu respuesta:');
            if (replyText && replyText.trim() !== '') {
                const replyId = commentId + '-reply-' + document.getElementById(commentId + '-replies').children.length;
                const replyElement = createCommentElement(replyId, replyText);
                document.getElementById(commentId + '-replies').appendChild(replyElement);
                document.getElementById(commentId + '-replies').classList.remove('hidden');
            }
        }

        function showConfirmationModal(commentId) {
            commentToDelete = commentId;
            document.getElementById('confirmationModal').classList.remove('hidden');
        }

        function confirmDelete(confirm) {
            if (confirm && commentToDelete) {
                const commentElement = document.getElementById(commentToDelete);
                commentElement.remove();
            }
            commentToDelete = null;
            document.getElementById('confirmationModal').classList.add('hidden');
        }

        function formatText(command) {
            document.execCommand(command, false, null);
        }

        function addImage() {
            const fileInput = document.getElementById('imageUpload');
            const file = fileInput.files[0];
            const reader = new FileReader();
            reader.onloadend = function() {
                const img = document.createElement('img');
                img.src = reader.result;
                img.className = 'w-full h-auto mt-2 rounded-lg';
                const commentBox = document.getElementById('newCommentContainer');
                commentBox.appendChild(img);
            }
            if (file) {
                reader.readAsDataURL(file);
            }
        }