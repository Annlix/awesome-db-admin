<template>
  <a-row
    class="fullscreen-height"
    type="flex"
    justify="center"
    align="middle"
  >
    <a-col
      :span=6
    >
      <a-card
        class="login-box"
        title="Connect to the database"
      >
        <a-form-model
          :model="form"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
        >
          <a-form-model-item
            label="Type"
          >
            <a-select
              v-model="form.dbType"
              placeholder="Please choose your database type"
            >
              <a-select-option v-for="item of this.dict.databaseTypes" :key="'db_' + item.id" :value="item.value">{{ item.name }}</a-select-option>
              <a-select-option value="redis">Redis</a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item
            label="Host"
          >
            <a-input
              v-model="form.host"
              placeholder="Please input the host address"
            ></a-input>
          </a-form-model-item>
          <a-form-model-item
            label="Username"
          >
            <a-input
              v-model="form.username"
              placeholder="Please input the username of database"
            ></a-input>
          </a-form-model-item>
        <a-form-model-item
            label="Password"
          >
            <a-input
              v-model="form.password"
              placeholder="Please input the password"
            ></a-input>
          </a-form-model-item>
          <a-form-model-item
            :wrapper-col="{span: 2, offset: 11}"
          >
            <a-button type="primary">Login</a-button>
          </a-form-model-item>
        </a-form-model>
      </a-card>
    </a-col>
  </a-row>
</template>

<script>
import '../../style/scss/auth/index.scss'
export default {
  data () {
    return {
      labelCol: { span: 5 },
      wrapperCol: { span: 19 },
      form: {
        dbType: '',
        host: null,
        username: null,
        password: null
      }
    }
  },
  created () {
  }
}
</script>
<style>
  .height-100 {
    height: 100px;
    min-height: 100px;
    max-height: 100px;
  }
</style>