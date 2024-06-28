require('dotenv').config();
class ConectarBD{
    constructor(){
        this.conexion=null;
        this.mysql=require("mysql2/promise");

    }

    async conectarMySql(){
        try {
            this.conexion = await this.mysql.createConnection({
                host: process.env.HOSTMYSQL || "bq8dbvnjsjexya1wjk40-mysql.services.clever-cloud.com",
                user: process.env.USERMYSQL || "um0s0tnccrngoz5j",
                password: process.env.PASSWORDMYSQL || "LgYOU9KcYbX6L6QeV7Je",
                database: process.env.DATABASEMYSQL || "bq8dbvnjsjexya1wjk40",
                port: process.env.PORTMYSQL || 3306
            });
            console.log("Conectado a MySql");
            return this.conexion;
       } catch (error){
            console.error("Error al conectar con MySql"+error);
       }
    }
    async cerrarConexion(){
        
            try {
                await this.conexion.end();
                console.log("Conexion de Mysql cerrada");
            } catch (error) {
                console.error("Error al desconectar de Mysql"+error);
            
        }
    }
}

module.exports=ConectarBD;