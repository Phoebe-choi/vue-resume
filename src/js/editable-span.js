Vue.component('editable-span', {
    props: ['value'],
    template: `
                <span class="editableSpan">
                        <span v-show="!editing">{{value}}</span>
                        <input v-show="editing" type="text" v-bind:value="value" @input="triggerEdit">
                        <button @click="editing = !editing">edit</button>
                </span>			
        `,
    data() {
        return {
            editing: false
        }
    },
    methods: {
        //当用户输入编辑文字的时候，触发emit，然后告诉它的父级元素，这个被编辑了。emit是this自带的
        triggerEdit(e) {
            this.$emit('edit', e.target.value)
        }
    }
})