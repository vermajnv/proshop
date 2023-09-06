const catchError  = (catchError) => (req, res, next) => {
    return Promise.resolve(catchError(req, res, next)).catch(next);
}

const catchError1 = (caller) => async (req, res, next) => {
    try {
        await caller(req, res);
    } catch (error) {
        return next(error);
    }
}

export {
    catchError,
    catchError1
};