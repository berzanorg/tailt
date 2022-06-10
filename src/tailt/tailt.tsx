import { AnchorHTMLAttributes, ButtonHTMLAttributes, FC, FormHTMLAttributes, forwardRef, HTMLAttributes, InputHTMLAttributes, LabelHTMLAttributes, LiHTMLAttributes, SelectHTMLAttributes, SVGAttributes, TextareaHTMLAttributes } from "react";
import { clsify } from "./utils";

// These are the functions to create customized components using supported HTML elements
export function a(t: TemplateStringsArray) {
    const A = forwardRef<HTMLAnchorElement, AnchorHTMLAttributes<HTMLAnchorElement>>(
        ({className = "", ...p}, ref) => <a ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
    return A
}

export function article(t: TemplateStringsArray) {
    const Article = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
        ({className = "", ...p}, ref) => <article ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
    return Article
}

export function button(t: TemplateStringsArray) {
    const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
        ({className = "", ...p}, ref) => <button ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
    return Button
}

export function div(t: TemplateStringsArray) {
    const Div = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
        ({className = "", ...p}, ref) => <div ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
    return Div
}

export function form(t: TemplateStringsArray) {
    const Form = forwardRef<HTMLFormElement, FormHTMLAttributes<HTMLFormElement>>(
        ({className = "", ...p}, ref) => <form ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
    return Form
}

export function footer(t: TemplateStringsArray) {
    const Footer = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
        ({className = "", ...p}, ref) => <footer ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
    return Footer
}

export function h1(t: TemplateStringsArray) {
    const H1 = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
        ({className = "", ...p}, ref) => <h1 ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
    return H1
}

export function h2(t: TemplateStringsArray) {
    const H2 = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
        ({className = "", ...p}, ref) => <h2 ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
    return H2
}

export function h3(t: TemplateStringsArray) {
    const H3 = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
        ({className = "", ...p}, ref) => <h3 ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
    return H3
}

export function h4(t: TemplateStringsArray) {
    const H4 = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
        ({className = "", ...p}, ref) => <h4 ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
    return H4
}

export function h5(t: TemplateStringsArray) {
    const H5 = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
        ({className = "", ...p}, ref) => <h5 ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
    return H5
}

export function h6(t: TemplateStringsArray) {
    const H6 = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
        ({className = "", ...p}, ref) => <h6 ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
    return H6
}

export function header(t: TemplateStringsArray) {
    const Header = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
        ({className = "", ...p}, ref) => <header ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
    return Header
}

export function input(t: TemplateStringsArray) {
    const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
        ({className = "", ...p}, ref) => <input ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
    return Input
}

export function label(t: TemplateStringsArray) {
    const Label = forwardRef<HTMLLabelElement, LabelHTMLAttributes<HTMLLabelElement>>(
        ({className = "", ...p}, ref) => <label ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
   return Label
}

export function li(t: TemplateStringsArray) {
    const Li = forwardRef<HTMLLIElement, LiHTMLAttributes<HTMLLIElement>>(
        ({className = "", ...p}, ref) => <li ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
    return Li
}

export function main(t: TemplateStringsArray) {
    const Main = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
        ({className = "", ...p}, ref) => <main ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
    return Main
}

export function nav(t: TemplateStringsArray) {
    const Nav = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
        ({className = "", ...p}, ref) => <nav ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
   return Nav
}

export function p(t: TemplateStringsArray) {
    const P = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
        ({className = "", ...p}, ref) => <p ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
    return P
}

export function section(t: TemplateStringsArray) {
    const Section = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
        ({className = "", ...p}, ref) => <section ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
   return Section
}

export function span(t: TemplateStringsArray) {
    const Span = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
        ({className = "", ...p}, ref) => <span ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
   return Span
}

export function textarea(t: TemplateStringsArray) {
    const TextArea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(
        ({className = "", ...p}, ref) => <textarea ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
    return TextArea
}

export function ul(t: TemplateStringsArray) {
    const Ul = forwardRef<HTMLUListElement, HTMLAttributes<HTMLUListElement>>(
        ({className = "", ...p}, ref) => <ul ref={ref} className={clsify(t) + " " + className} {...p}/>
    )
    return Ul
}
