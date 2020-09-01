const {Builder, By, Key, util, WebDriver, Actions} = require("selenium-webdriver");

const user = "u20162153196";
const pass = "123456789";
const eps = "Medimas";
const file = "C:\Users\andre\Downloads\Informe5.pdf"

//7700162
const userFake = "u20161163716";
const passFake = "u20161163716";

async function ComprobarCampos(){
    let driver = await new Builder().forBrowser("chrome").build();
    
    /*
    driver.get("http://localhost:4200");
    await driver.sleep(10000);
    driver.findElement(By.name("usuario")).sendKeys(user, Key.INSERT);
    await driver.sleep(5000);
    driver.findElement(By.name("contrasena")).sendKeys(pass, Key.INSERT);
    await driver.sleep(5000);
    driver.findElement(By.id("btnLogin")).click();
    await driver.sleep(5000)
    driver.findElement(By.id("btnRegresar")).click();   
    await driver.sleep(5000);
    driver.findElement(By.name("usuario")).sendKeys(user, Key.INSERT);
    await driver.sleep(5000);
    driver.findElement(By.name("contrasena")).sendKeys("1234", Key.RETURN);
    await driver.sleep(5000);
    driver.findElement(By.xpath("/html/body/div[2]/div/div[3]/button[1]")).click();
    await driver.sleep(5000);
    driver.findElement(By.name("usuario")).clear();
    await driver.sleep(2000);
    driver.findElement(By.name("contrasena")).clear();
    await driver.sleep(5000);
    driver.findElement(By.name("usuario")).sendKeys(userFake,Key.INSERT);
    await driver.sleep(5000);
    driver.findElement(By.name("contrasena")).sendKeys(passFake, Key.RETURN);
    await driver.sleep(5000);
    driver.findElement(By.xpath("/html/body/div[2]/div/div[3]/button[1]")).click();
    await driver.sleep(5000);
    driver.findElement(By.linkText("Olvidé Mi Contraseña")).click();
    await driver.sleep(10000);
    */
    driver.get("http://localhost:4200");
    await driver.sleep(5000);
    driver.findElement(By.name("usuario")).sendKeys(user, Key.INSERT);
    await driver.sleep(2000);
    driver.findElement(By.name("contrasena")).sendKeys(pass, Key.RETURN);
    await driver.sleep(5000);
    driver.findElement(By.id("btnContinuar")).click();
    await driver.sleep(5000);
    driver.findElement(By.xpath('//*[@id="btnSolicitar"]')).click();
    await driver.sleep(5000);
    driver.findElement(By.xpath('//*[@id="main"]/div[2]/div[1]/div/div/div/div/button')).click();
    await driver.sleep(5000);
    driver.findElement(By.xpath('//*[@id="main-wrapper"]/app-navbar/header/nav/div[2]/ul[2]/li[2]/a/img')).click();
    await driver.sleep(5000);
    driver.findElement(By.xpath('//*[@id="main-wrapper"]/app-navbar/header/nav/div[2]/ul[2]/li[2]/a/img')).click();
    await driver.sleep(5000);
    driver.findElement(By.name("eps")).sendKeys(eps,Key.INSERT);
    await driver.sleep(3000);
    driver.findElement(By.xpath('//*[@id="loginform"]/div[5]/div[3]/div/button[1]')).click();
    await driver.sleep(2000);
    driver.findElement(By.xpath('//*[@id="main-wrapper"]/div/div/app-inscripcion-pasantia/div/div/div/div/div/div/div/div/div/div[10]/button')).click();
    await driver.sleep(5000);
    driver.findElement(By.xpath('//*[@id="loginform"]/div[6]/div[3]/div/button[2]')).click();
    await driver.sleep(3000);
    driver.findElement(By.xpath("/html/body/div[2]/div/div[3]/button[1]")).click();
    await driver.sleep(4000);
    driver.findElement(By.xpath("/html/body/div[2]/div/div[3]/button[1]")).click();
    await driver.sleep(30000);
    driver.findElement(By.name("usuario")).isDisplayed();
    await driver.sleep(2000);
    driver.findElement(By.name("usuario")).sendKeys(user, Key.INSERT);
    await driver.sleep(2000);
    driver.findElement(By.name("contrasena")).sendKeys(pass, Key.RETURN);
    await driver.sleep(3000);
    driver.findElement(By.xpath('//*[@id="sidebarnav"]/li[3]/a')).click();
    await driver.sleep(2000);
    driver.findElement(By.xpath('//*[@id="sidebarnav"]/li[3]/ul/li/a')).click();
    await driver.sleep(5000);
    driver.findElement(By.xpath('//*[@id="labelUpload"]')).click();
    await driver.sleep(15000);
    driver.findElement(By.xpath('//*[@id="main-wrapper"]/div/div/app-acta-inicio/div/div/div/div/div[2]/div[1]/button')).click();
    await driver.sleep(5000);
    driver.findElement(By.xpath("/html/body/div[2]/div/div[3]/button[1]")).click();
    await driver.sleep(5000);
    driver.findElement(By.xpath("/html/body/div[2]/div/div[3]/button[1]")).click();
    await driver.sleep(5000);
    driver.findElement(By.xpath('//*[@id="main-wrapper"]/app-navbar/header/nav/div[2]/ul[2]/li[2]/a')).click();
    await driver.sleep(3000);
    driver.findElement(By.xpath('//*[@id="main-wrapper"]/app-navbar/header/nav/div[2]/ul[2]/li[2]/div/ul/li[6]/a')).click();
    await driver.sleep(5000);
    /*
    driver.findElement(By.name("usuario")).sendKeys("7700162", Key.INSERT);
    await driver.sleep(2000);
    driver.findElement(By.name("contrasena")).sendKeys("123456", Key.RETURN);
    await driver.sleep(5000);
    driver.findElement(By.xpath('//*[@id="sidebarnav"]/li[4]/a')).click();
    await driver.sleep(3000);
    driver.findElement(By.xpath('//*[@id="sidebarnav"]/li[4]/ul/li[1]/a')).click();
    await driver.sleep(5000);
    driver.findElement(By.xpath('//*[@id="main-wrapper"]/div/div/app-empresas/div/div/div/div/div[3]/div/div[2]/div/button')).click();
    await driver.sleep(3500);
    driver.findElement(By.name("nombre")).sendKeys("Riot Games", Key.INSERT);
    await driver.sleep(2000);
    driver.findElement(By.name("direccion")).sendKeys("Mountain View", Key.INSERT);
    await driver.sleep(2000);
    driver.findElement(By.name("telEmpresa")).sendKeys("1905607893", Key.INSERT);
    await driver.sleep(2000);
    driver.findElement(By.name("naturaleza")).click();
    await driver.sleep(3000);
    driver.findElement(By.xpath('//*[@id="loginform"]/div[2]/div[2]/div/select/option[2]')).click();
    await driver.sleep(2000);
    driver.findElement(By.name("actividadEc")).sendKeys("Videogames", Key.INSERT);
    await driver.sleep(2000);
    driver.findElement(By.name("persona")).sendKeys("Tryndamere", Key.INSERT);
    await driver.sleep(2000);
    driver.findElement(By.name("puesto")).sendKeys("CEO", Key.INSERT);
    await driver.sleep(2000);
    driver.findElement(By.name("correo")).sendKeys("Tryndamere@riotgames.com", Key.INSERT);
    await driver.sleep(2000);
    driver.findElement(By.name("telPersona")).sendKeys("13245677989", Key.INSERT);
    await driver.sleep(5000);
    driver.findElement(By.xpath('//*[@id="loginform"]/div[6]/button[2]')).click();
    await driver.sleep(3000);
    driver.findElement(By.xpath("/html/body/div[3]/div/div[3]/button[1]")).click();
    await driver.sleep(2000);
    driver.findElement(By.xpath("/html/body/div[3]/div/div[3]/button[1]")).click();
    await driver.sleep(5000);
    driver.findElement(By.xpath('//*[@id="sidebarnav"]/li[4]/ul/li[2]/a')).click();
    await driver.sleep(3000);
    driver.findElement(By.xpath('//*[@id="main-wrapper"]/div/div/app-vacantes/div/div/div/div/div[3]/div/div[2]/div/button')).click();
    await driver.sleep(3000);
    driver.findElement(By.name("titulo")).sendKeys("Backend Developer Ruby", Key.INSERT);
    await driver.sleep(2000);
    driver.findElement(By.name("funciones")).sendKeys("Developer", Key.INSERT);
    await driver.sleep(2000);
    driver.findElement(By.xpath('//*[@id="loginform"]/div[2]/div[1]/div/select')).click();
    await driver.sleep(2000);
    driver.findElement(By.xpath('//*[@id="loginform"]/div[2]/div[1]/div/select/option[2]')).click();
    await driver.sleep(2000);
    driver.findElement(By.name("empresa")).click();
    await driver.sleep(2000);
    driver.findElement(By.xpath('//*[@id="loginform"]/div[2]/div[2]/div/select/option[3]')).click();
    await driver.sleep(2000);
    driver.findElement(By.name("ubicacion")).sendKeys("Colombia", Key.INSERT);
    await driver.sleep(2000);
    driver.findElement(By.name("pagada")).click();
    await driver.sleep(2000);
    driver.findElement(By.xpath('//*[@id="loginform"]/div[3]/div[2]/div/select/option[3]')).click();
    await driver.sleep(2000);
    driver.findElement(By.name("cantidad")).sendKeys(2, Key.INSERT);
    await driver.sleep(2000);
    driver.findElement(By.name("descripcion")).sendKeys("Trabajo si hay", Key.INSERT);
    await driver.sleep(2000);
    driver.findElement(By.xpath('//*[@id="loginform"]/div[5]/button[2]')).click();
    await driver.sleep(2000);
    driver.findElement(By.xpath("/html/body/div[3]/div/div[3]/button[1]")).click();
    await driver.sleep(2000);
    driver.findElement(By.xpath("/html/body/div[3]/div/div[3]/button[1]")).click();
    await driver.sleep(5000);

    */
    driver.quit();






    
    
    




}
ComprobarCampos();

