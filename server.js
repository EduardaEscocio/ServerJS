import app from './src/app.js';

import conexao from './infra/conexao.js';

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});




