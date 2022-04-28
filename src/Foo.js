import Hookable from 'hable'

export default class Foo extends Hookable {
  constructor() {
    // Call to parent to initialize
    super()
    // Initialize Hookable with custom logger
    // super(consola)
  }

  async someFunction() {
    // Call and wait for `hook1` hooks (if any) sequential
    console.log('before call hook1')
    await this.callHook('hook1')
    console.log('after called hook1')
  }
}
