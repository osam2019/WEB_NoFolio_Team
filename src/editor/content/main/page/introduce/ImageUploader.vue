<template>
	<div class="image-uploader">
		<el-upload
			class="avatar-uploader"
			action=""
			:show-file-list="false"
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
			return this.$store.state.User.image;
		}
	},
	methods: {
		beforeAvatarUpload(file) {
			this.$store.state.User.image = "/assets/1.jpg";
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
