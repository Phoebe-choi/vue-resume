var app = new Vue({
    el: '#app',
    data: {
        editingName: false,
        resume: {
            name: '姓名',
            gender: '女',
            birthday: '1990.2.2',
            jobTitle: '前端工程师',
            phone: '135455151515',
            email: 'example@example.com'
        }
    },
    methods: {
        onEdit(key, value) {
            this.resume[key] = value
        }
    }
})