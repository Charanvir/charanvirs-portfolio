export default function validateEmail(email) {
    const validation = /^([a-z0-9_-]+)@([\da-z-]+)\.([a-z]{2,6})$/;
    return validation.test(String(email).toLowerCase());
}
