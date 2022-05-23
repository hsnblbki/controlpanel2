(function(){
    const uploaders=document.querySelectorAll('.js-upload');
    Array.from(uploaders,uploader => {
        const upload=uploader.querySelector('.js-upload-value');
        const placeholder=uploader.querySelector('.js-upload-placeholder');
        const remove=uploader.querySelector('.js-upload-remove');

        upload.addEventListener('change',function(){
            let img=this.files[0];
            const reader=new FileReader();
            reader.readAsDataURL(img);
            reader.onloadend=() => {
                uploader.classList.add('has-image');
                placeholder.src=reader.result;
            }
        })

        remove.addEventListener('click', e => {
            upload.value=null;
            uploader.classList.remove("has-image");
            placeholder.src="";
        })
    })
})()