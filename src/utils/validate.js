// 检验是否为外部路径，即是否包含
export function isExternal(path) {
    return /^(https?:|mailto:|tel:)/.test(path)
}

// 模拟验证所输入usernmae
export function validUsername(name) {
    const valid = ['admin']
    return valid.indexOf(name.trim()) >= 0
}
