<!-- 
 * html: 编辑框
 * 实时反馈 html:编辑内容.
 * 此处不做任何处理
  -->
<template>
    <!-- v-focus="focusState" -->
    <div class="edit-div" v-html="innerText" v-focus="focusState" :contenteditable="canEdit" @focus="clickInput" @blur="blurInput" @input="changeInput"></div>
</template>
<script>
export default {
    name: 'editDiv',
    props: {
        value: {
            type: String,
            default: ''
        },
        canEdit: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            innerText: this.value,
            isLocked: false,
            focusState: false
        }
    },
    watch: {
        'value' () {
            if (!this.isLocked || !this.innerText) {
                this.innerText = this.value;
            }
        }
    },
    // 注册一个自定义指令 `v-focus`
    directives: {
        focus: {
            // 指令的定义
            inserted: function(el) {
                el.focus()
            },
            update: function(el, { value }) {
                if (value) {
                    el.focus()
                }
            }

        }
    },
    methods: {
        clickInput() {
            this.isLocked = true;
            if (this.innerText == this.value) {
                this.innerText = '';
            }
            this.focusState = true;
        },
        changeInput() {
            this.$emit('input', this.$el.innerHTML);
        },
        blurInput() {
            this.isLocked = false;
            this.focusState = false;
        }
    }
}

</script>

<style scoped>
.edit-div { padding: .5rem 1rem; border-radius: .5rem; overflow-y: auto; color: #b2b2b2; font-size: 1.2rem; line-height: 1.6rem; box-sizing: border-box;}
.edit-div:focus { border: 1px dotted blue; background-color: rgba(255,255,255,.7); color: rgba(0,0,0,.7); outline: none; }
</style>