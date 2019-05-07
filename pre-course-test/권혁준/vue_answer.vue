<template>
  
    <div id="answer">
        <!-- 문제 1 -->
        <!-- 아래 버튼을 클릭했을 때 브라우저 기본 경고창을 띄워보세요 -->
        <p>1)</p>
        <button @click="openAlert">click me</button>
    
        <!-- 문제 2 -->
        <!-- 뷰 데이터 속성인 login 값에 따라 아래 태그가 표시되거나 미표시되게 해보세요.  -->
        <p>2)</p>
        <p v-if="login">user has been logged in</p>
        <p v-else>please log in</p>
    
        <!-- 문제 3 -->
        <!-- '<p>hello vue</p>' 를 기본 템플릿으로 갖는 로컬 컴포넌트를 한개 등록해보세요 -->
        <p>3)</p>
        <hello-vue-component></hello-vue-component>

        <!-- 문제 4 -->
        <!-- 문제 3에서 등록한 컴포넌트에 아래의 num 데이터를 전달해보세요 -->
        <p>4)</p>
        <hello-vue-component :parent-num="num"></hello-vue-component>

        <!-- 문제 5 -->
        <!-- 문제 3에서 등록한 컴포넌트에서 이벤트를 발생시켜 num 데이터의 값을 변경해보세요 -->
        <p>5)</p>
        <p>num of parent: {{ num }}</p>
        <hello-vue-component :parent-num.sync="num" :question="5"></hello-vue-component>
    </div>
</template>

<script>

var HelloVueComponent = {
    props: ['parentNum', 'question'],
    template: '<p>hello vue {{ message }}</p>',
    created: function () {
        if (!isNaN(this.parentNum)) {
            this.message = '- num of child component : ' + this.parentNum;
        }

        if (this.question == 5) {
            this.message = '- change parent num by child component (num +1)'
            this.$emit('update:parent-num', this.parentNum + 1);
        }
    },
    data () {
        return {
            message: ''
        };
    }
}; 

export default {
    el: '#answer',
    components: {
        'hello-vue-component': HelloVueComponent
    },
    data() {
        return {
            login: false,
            num: 10,
        }
    },
    methods: {
        openAlert () {
            alert('The answer of Q1.')
        }
    }
}
</script>

<style>

</style>
