<template>
    <div>
        <h1>Welcome to {{inputData}}!!</h1>
        <input type="text" v-model="inputData" />
        <button @click=getData>출력 붯튼</button>
        <button @click=setData>변경 붯튼</button>

        <select>
            
        </select>
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
    watch: {
        inputData() {
            console.log(this.inputData);
        }
    },
    methods: {
        getData() {
            alert(this.inputData);
        },
        setData() {
            console.log(this);
            this.inputData = 12345;
        },
    },
    // noNamedMethod() {
    //     console.log("이것도 찍히나?");
    // },
    // beforeCreate() {
    //     console.log("beforeCreate");
    // },
    // beforeMount() {
    //     console.log("beforeMount");
    // },
    // created() {
    //     console.log("created");
    // },
    // mounted() {
    //     console.log("mounted");
    // },
    // beforeUpdate() {
    //     console.log("beforeUpdate");
    // },
    // updated() {
    //     console.log("update");
    // },
    // beforeDestoryed() {
    //     console.log("beforeDestroyed");
    // },
    // destoryed() {
    //     console.log("destroyed");
    // },
}
</script>
