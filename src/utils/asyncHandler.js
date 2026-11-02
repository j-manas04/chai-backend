const asyncHandler = (requestHandler) => {
    Promise.resolve(requestHandler(req, res, next)).
    catch((err) => next(err))
}


export {asyncHandler}

// // this code style to write for  try/catch for db connection  
// const asyncHandler = (fn) => async (req, res, next) => {

//     try {
//         await fn(req, res, next)
        
//     } catch (error) {
//         res.status(error.code || 500).json({
//             message : error.message,
//             success: false
//         })
//     }
// }