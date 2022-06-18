import { AnchorHTMLAttributes, ButtonHTMLAttributes, FormHTMLAttributes, forwardRef, HTMLAttributes, InputHTMLAttributes, LabelHTMLAttributes, LiHTMLAttributes, TextareaHTMLAttributes } from "react";
import { clsify } from "./utils";

// These are the functions to create customized components using supported HTML elements
export function a(t: TemplateStringsArray) {
    return forwardRef<HTMLAnchorElement, AnchorHTMLAttributes<HTMLAnchorElement>>(
        ({className = "", ...p}, ref) => <a ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
}

export function article(t: TemplateStringsArray) {
    return forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
        ({className = "", ...p}, ref) => <article ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
}

export function button(t: TemplateStringsArray) {
    return forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
        ({className = "", ...p}, ref) => <button ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
}

export function div(t: TemplateStringsArray) {
    return forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
        ({className = "", ...p}, ref) => <div ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
}

export function form(t: TemplateStringsArray) {
    return forwardRef<HTMLFormElement, FormHTMLAttributes<HTMLFormElement>>(
        ({className = "", ...p}, ref) => <form ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
}

export function footer(t: TemplateStringsArray) {
    return forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
        ({className = "", ...p}, ref) => <footer ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
}

export function h1(t: TemplateStringsArray) {
    return forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
        ({className = "", ...p}, ref) => <h1 ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
}

export function h2(t: TemplateStringsArray) {
    return forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
        ({className = "", ...p}, ref) => <h2 ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
}

export function h3(t: TemplateStringsArray) {
    return forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
        ({className = "", ...p}, ref) => <h3 ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
}

export function h4(t: TemplateStringsArray) {
    return forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
        ({className = "", ...p}, ref) => <h4 ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
}

export function h5(t: TemplateStringsArray) {
    return forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
        ({className = "", ...p}, ref) => <h5 ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
}

export function h6(t: TemplateStringsArray) {
    return forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
        ({className = "", ...p}, ref) => <h6 ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
}

export function header(t: TemplateStringsArray) {
    return forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
        ({className = "", ...p}, ref) => <header ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
}

export function input(t: TemplateStringsArray) {
    return forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
        ({className = "", ...p}, ref) => <input ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
}

export function label(t: TemplateStringsArray) {
    return forwardRef<HTMLLabelElement, LabelHTMLAttributes<HTMLLabelElement>>(
        ({className = "", ...p}, ref) => <label ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
}

export function li(t: TemplateStringsArray) {
    return forwardRef<HTMLLIElement, LiHTMLAttributes<HTMLLIElement>>(
        ({className = "", ...p}, ref) => <li ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
}

export function main(t: TemplateStringsArray) {
    return forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
        ({className = "", ...p}, ref) => <main ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
}

export function nav(t: TemplateStringsArray) {
    return forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
        ({className = "", ...p}, ref) => <nav ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
}

export function p(t: TemplateStringsArray) {
    return forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
        ({className = "", ...p}, ref) => <p ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
}

export function section(t: TemplateStringsArray) {
    return forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
        ({className = "", ...p}, ref) => <section ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
}

export function span(t: TemplateStringsArray) {
    return forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
        ({className = "", ...p}, ref) => <span ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
}

export function textarea(t: TemplateStringsArray) {
    return forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(
        ({className = "", ...p}, ref) => <textarea ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
}

export function ul(t: TemplateStringsArray) {
    return forwardRef<HTMLUListElement, HTMLAttributes<HTMLUListElement>>(
        ({className = "", ...p}, ref) => <ul ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
}
