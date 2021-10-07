
var eduStr = localStorage.getItem("educations");
var expStr = localStorage.getItem("experiences");
var proStr = localStorage.getItem("projects");
var skillStr = localStorage.getItem("skills");

export const data = {
    basicinfo: [],
    educations: eduStr ? JSON.parse(eduStr) : [],
    experiences: expStr ? JSON.parse(expStr) : [],
    projects: proStr ? JSON.parse(proStr) :[],
    skills: skillStr ? JSON.parse(skillStr) :[]
}