<template>
<div class="login-container flx-center">
  <div class="login-box">
    <h2 class="logo-text flx-center">RAINS CLEAR</h2>
    <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules">
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" placeholder="请输入用户名">
          <template #prefix>
            <el-icon class="el-input__icon">
              <user />
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" type="password" placeholder="请输入密码" show-password autocomplete="new-password">
          <template #prefix>
            <el-icon class="el-input__icon">
              <lock />
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
    </el-form>
    <div class="login-btn">
      <el-button :icon="CircleClose" round size="large" @click="resetForm(loginFormRef)"> 重置 </el-button>
      <el-button :icon="UserFilled" round size="large" type="primary" :loading="loading" @click="login(loginFormRef)">
        登录
      </el-button>
    </div>
  </div>
</div>
</template>

<script setup lang="ts" name="Login">
import { ref, reactive, onMounted } from "vue";
import { Login } from "@/api/interface";
import { CircleClose, UserFilled } from "@element-plus/icons-vue";
import type { ElForm } from "element-plus";
import { useRouter } from "vue-router";

const router = useRouter();
type FormInstance = InstanceType<typeof ElForm>;
const loginFormRef = ref<FormInstance>();

const loginRules = reactive({
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }]
});

const loading = ref(false);
const loginForm = reactive<Login.ReqLoginForm>({
  username: "",
  password: ""
});


const login = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  router.push("/layout");
}
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

onMounted(()=>{

})
</script>

<style scoped lang="scss">
.login-container{
  height: 100%;
  background-color: #fff;
  background-image: url("@/assets/images/login_bg.svg");
  background-size: 100% 100%;
  background-size: cover;
  .logo-text{
    padding: 0 0 20px;
    margin: 0;
    font-size: 42px;
    font-weight: bold;
    color: #34495e;
    white-space: nowrap;
  }
  .login-box{
    width: 420px;
    padding: 50px 40px 45px;
    background-color: var(--el-bg-color);
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0 2px 10px 2px;
    .login-btn {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: 40px;
      white-space: nowrap;
      .el-button {
        width: 185px;
      }
    }
  }
}
</style>
