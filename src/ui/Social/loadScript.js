import React, { Component, Children } from 'react';

const identity = v => v

export class LoadScript extends Component {
    componentDidMount () {
        const { src, onScriptLoaded=identity, onScriptError=identity } = this.props
        
        loadScript(src)
        .then(onScriptLoaded)
        .catch(onScriptError)
    }

    render () {
        const { children } = this.props;
        return Children.only(children);
    }
}


const loadedScripts = {}
export default function loadScript (src) {
    if (loadedScripts[src]) return loadedScripts[src]
    loadedScripts[src] = new Promise(function (res, rej) {
        if (typeof document !== 'undefined') {
            const script = document.createElement('script')
            script.src = src
            script.onload = res
            script.onerror = rej
            document.body.appendChild(script)
        } else {
            res()
        }
    })
    return loadedScripts[src]
}