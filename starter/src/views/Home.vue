<template>
    <div>
        <h1>Welcome to {{inputData}}!!</h1>
        <input type="text" v-model="inputData" />
        <button @click=getData>붯튼</button>
    </div>
</template>

<script>
export default {
    name: "theHome",
    data() {
        return {
            title: "가보즈아아아아!!",
            inputData: "",
        }
    },
    methods: {
        getData() {
            alert(this.inputData);
        }
    }
}
</script>
