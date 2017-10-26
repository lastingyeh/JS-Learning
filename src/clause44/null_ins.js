// 防止原型污染 設定 __proto__ = null
var null_proto = Object.create(null);
Object.getPrototypeOf(null_proto) === null;

export { null_proto };
