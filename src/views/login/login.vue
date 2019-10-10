<template>
    <div class="login-wrapper">
        <el-form
            ref="loginForm"
            :model="loginForm"
            :rules="loginRules"
            class="login-form"
            label-position="left"
        >
            <div class="title-container">
                <h3 class="title">Login Form</h3>
            </div>
<!--            username el-form-item-->
<!--            这里的prop用于定义验证的rules，和el-form的rules相匹配-->
            <el-form-item prop="username">
                <span>Admin Icon</span>
                <el-input
                    prefix-icon="el-icon-search"
                    ref="username"
                    v-model="loginForm.username"
                    placeholder="Username"
                    name="username"
                    auto-complete="on"
                />
            </el-form-item>

<!--            这里的prop用于定义验证的rules，和el-form的rules相匹配-->
            <el-form-item prop="password">
                <span>Pass Icon</span>
                <el-input
                    ref="password"
                    v-model="loginForm.password"
                    placeholder="Password"
                    name="password"
                    :type="passwordType"
                    auto-complete="on"
                ></el-input>
                <span @click="handleClickEye">Eye</span>
            </el-form-item>

            <el-button>Login</el-button>

        </el-form>
    </div>
</template>

<script>
// import SvgIcon from "@/components/SvgIcon/SvgIcon";
import { validUsername } from '@/utils/validate'

export default {
    name: 'Login',
    components: {

    },
    data() {
        // element-ui 中使用的是 async-validator
        const validateUsername = function(rule, value, callback) {
            if (!validUsername(value)) {
                callback(new Error('Please enter correct user name'))
            } else {
                callback()
            }
        }
        const validatePassword = function(rule, value, callback) {
            if (value.length < 6) {
                callback(new Error('The length of password cannot less than 6'))
            } else {
                callback()
            }
        }
        return {
            loginForm: {
                username: 'admin',
                password: '111111'
            },
            loginRules: {
                username: [{ required: true, trigger: 'blur', validator: validateUsername }],
                password: [{ required: true, trigger: 'blur', validator: validatePassword }]
            },
            passwordType: 'password'
        }
    },
    methods: {
        handleClickEye() {
            if (this.passwordType === 'password') {
                this.passwordType = 'text'
            } else {
                this.passwordType = 'password'
            }
            // dom 更新之后执行回调
            this.$nextTick(() => {
                this.$refs.password.focus()
            })
        }
    }
}
</script>

<style scoped>

</style>
