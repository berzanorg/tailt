import { AnchorHTMLAttributes, ButtonHTMLAttributes, FC, FormHTMLAttributes, HTMLAttributes, InputHTMLAttributes, LabelHTMLAttributes, LiHTMLAttributes, SelectHTMLAttributes, SVGAttributes, TextareaHTMLAttributes } from "react";
import { clsify } from "./utils";


export function a(t: TemplateStringsArray) {
    const A: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({className = "", ...p}: any) => <a className={clsify(t) + ' ' + className} {...p}/>
    return A
}

export function article(t: TemplateStringsArray) {
    const Article: FC<HTMLAttributes<HTMLElement>> = ({className = "", ...p}: any) => <article className={clsify(t) + ' ' + className} {...p}/>
    return Article
}

export function button(t: TemplateStringsArray) {
    const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({className = "", ...p}: any) => <button className={clsify(t) + ' ' + className} {...p}/>
    return Button
}

export function div(t: TemplateStringsArray) {
    const Div: FC<HTMLAttributes<HTMLDivElement>> = ({className = "", ...p}: any) => <div className={clsify(t) + ' ' + className} {...p}/>
    return Div
}

export function form(t: TemplateStringsArray) {
    const Form: FC<FormHTMLAttributes<HTMLFormElement>> = ({className = "", ...p}: any) => <form className={clsify(t) + ' ' + className} {...p}/>
    return Form
}

export function footer(t: TemplateStringsArray) {
    const Footer: FC<HTMLAttributes<HTMLElement>> = ({className = "", ...p}: any) => <footer className={clsify(t) + ' ' + className} {...p}/>
    return Footer
}

export function h1(t: TemplateStringsArray) {
    const H1: FC<HTMLAttributes<HTMLHeadingElement>> = ({className = "", ...p}: any) => <h1 className={clsify(t) + ' ' + className} {...p}/>
    return H1
}

export function h2(t: TemplateStringsArray) {
    const H2: FC<HTMLAttributes<HTMLHeadingElement>> = ({className = "", ...p}: any) => <h2 className={clsify(t) + ' ' + className} {...p}/>
    return H2
}

export function h3(t: TemplateStringsArray) {
    const H3: FC<HTMLAttributes<HTMLHeadingElement>> = ({className = "", ...p}: any) => <h3 className={clsify(t) + ' ' + className} {...p}/>
    return H3
}

export function h4(t: TemplateStringsArray) {
    const H4: FC<HTMLAttributes<HTMLHeadingElement>> = ({className = "", ...p}: any) => <h4 className={clsify(t) + ' ' + className} {...p}/>
    return H4
}

export function h5(t: TemplateStringsArray) {
    const H5: FC<HTMLAttributes<HTMLHeadingElement>> = ({className = "", ...p}: any) => <h5 className={clsify(t) + ' ' + className} {...p}/>
    return H5
}

export function h6(t: TemplateStringsArray) {
    const H6: FC<HTMLAttributes<HTMLHeadingElement>> = ({className = "", ...p}: any) => <h6 className={clsify(t) + ' ' + className} {...p}/>
    return H6
}

export function header(t: TemplateStringsArray) {
    const Header: FC<HTMLAttributes<HTMLElement>> = ({className = "", ...p}: any) => <header className={clsify(t) + ' ' + className} {...p}/>
    return Header
}

export function input(t: TemplateStringsArray) {
    const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({className = "", ...p}: any) => <input className={clsify(t) + ' ' + className} {...p}/>
    return Input
}

export function label(t: TemplateStringsArray) {
    const Label: FC<LabelHTMLAttributes<HTMLLabelElement>> = ({className = "", ...p}: any) => <label className={clsify(t) + ' ' + className} {...p}/>
    return Label
}

export function li(t: TemplateStringsArray) {
    const Li: FC<LiHTMLAttributes<HTMLLIElement>> = ({className = "", ...p}: any) => <li className={clsify(t) + ' ' + className} {...p}/>
    return Li
}

export function main(t: TemplateStringsArray) {
    const Main: FC<HTMLAttributes<HTMLElement>> = ({className = "", ...p}: any) => <main className={clsify(t) + ' ' + className} {...p}/>
    return Main
}

export function nav(t: TemplateStringsArray) {
    const Nav: FC<HTMLAttributes<HTMLElement>> = ({className = "", ...p}: any) => <nav className={clsify(t) + ' ' + className} {...p}/>
    return Nav
}

export function p(t: TemplateStringsArray) {
    const P: FC<HTMLAttributes<HTMLParagraphElement>> = ({className = "", ...p}: any) => <p className={clsify(t) + ' ' + className} {...p}/>
    return P
}

export function section(t: TemplateStringsArray) {
    const Section: FC<HTMLAttributes<HTMLElement>> = ({className = "", ...p}: any) => <section className={clsify(t) + ' ' + className} {...p}/>
    return Section
}

export function span(t: TemplateStringsArray) {
    const Span: FC< HTMLAttributes<HTMLSpanElement>> = ({className = "", ...p}: any) => <span className={clsify(t) + ' ' + className} {...p}/>
    return Span
}

export function svg(t: TemplateStringsArray) {
    const SVG: FC<SVGAttributes<SVGElement>> = ({className= "", ...p}: any) => <svg className={clsify(t) + ' ' + className} {...p}/>
    return SVG
}

export function textarea(t: TemplateStringsArray) {
    const TextArea: FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = ({className= "", ...p}: any) => <textarea className={clsify(t) + ' ' + className} {...p}/>
    return TextArea
}

export function ul(t: TemplateStringsArray) {
    const Ul: FC<HTMLAttributes<HTMLUListElement>> = ({className= "", ...p}: any) => <ul className={clsify(t) + ' ' + className} {...p}/>
    return Ul
}
