import { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            hasError: false,
            error: null
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error
        }
    }

    componentDidCatch(error, info) {
        console.error({ error, info })
    }

    componentDidUpdate(prevProps) {
        if (this.state.hasError && prevProps.resetKey !== this.props.resetKey) {
            this.handleReset()
        }
    }

    handleReset() {
        this.setState({
            hasError: false,
            error: null
        })
    }

    render() {

        const { children } = this.props;
        const { hasError, error } = this.state;

        if (hasError) {
            return <div>
                <h2>Something went wrong.</h2>
                <p>{error?.message || 'An unexpected error occurred while loading this page.'}</p>
                <button type="button" onClick={this.handleReset}>Try again</button>
                <button type="button" onClick={() => window.location.assign('/')}>Go to home</button>
            </div>
        }

        return children
    }
}


export default ErrorBoundary;