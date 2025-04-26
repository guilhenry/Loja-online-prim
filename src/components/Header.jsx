
function Header(){

return(
    <div className="h-[80px]  bg-sky-700 flex items-center justify-around p-10px">
        <h1 className="font-mono text-2xl ">Nome da Loja </h1>

        <div className="bg-yellow-300 w-[400px] h-[50px] flex items-center ">
            <input type="text" name="busca" id="busca" className=" w-[360px] h-[30px] bg-neutral-50 border-black-500 rounded-l-xl p-3" />
            <button className="w-[30px] h-[30px] m-5px bg-red-700 rounded-r-sm cursor-pointer"></button>
        </div>

        <div className=" w-[300px] h-[50px] bg-red-700 flex items-center justify-around"  > 
            <a href="home">Home</a>
            <a href="promocao">promoçao</a>
            <a href="contato">contato</a>
        </div>
       
       
    </div>
)
}
export default Header;