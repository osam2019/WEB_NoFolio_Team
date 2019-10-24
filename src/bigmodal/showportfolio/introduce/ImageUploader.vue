<template>
	<div class="image-uploader">
		<el-upload
			class="avatar-uploader"
			action="https://jsonplaceholder.typicode.com/posts/"
			:show-file-list="false"
			:on-success="handleAvatarSuccess"
			:before-upload="beforeAvatarUpload">
			<img v-if="imageUrl" :src="imageUrl" class="avatar">
			<i v-else class="el-icon-plus avatar-uploader-icon"></i>
		</el-upload>
	</div>
</template>

<script>
 export default {
	name: "ImageUploader",
	computed:{
		imageUrl(){
			let portfolio = this.$store.state.BigModal.showportfolio.data;
			
			if (portfolio) {
				return portfolio.User.image;	
			}
			
			return "";
		}
	},
	methods: {
		handleAvatarSuccess(res, file) {
			this.imageUrl = URL.createObjectURL(file.raw);
		},
		beforeAvatarUpload(file) {
			const isJPG = file.type === 'image/jpeg';
			const isLt2M = file.size / 1024 / 1024 < 2;

			if (!isJPG) {
			  this.$message.error('Avatar picture must be JPG format!');
			}
			if (!isLt2M) {
			  this.$message.error('Avatar picture size can not exceed 2MB!');
			}
			return isJPG && isLt2M;
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.avatar-uploader {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}
	.avatar-uploader:hover {
		border-color: #409EFF;
	}
	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}
	.avatar {
		width: 178px;
		height: 178px;
		display: block;
	}
</style>
