import React from "react";

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.table(errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return <h1>Смотреть ошибки в консол...</h1>;
        }
        return this.props.children;
    }
}