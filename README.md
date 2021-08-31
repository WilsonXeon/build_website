電商平台(1)-前置作業
===
###### tags: `電商平台`
1. **登入到Azure**
    先到瀏覽器輸入底下網址並登入
    ● https://portal.azure.com/    
    ![](https://i.imgur.com/TvteCfE.png)
    
2. **按下"==建立資源=="並選擇所需的虛擬器**
    這邊以 Ubuntu Server 20.04 LTS 為例
    就會來到以下這個畫面↓
    ![](https://i.imgur.com/G9NgNzn.png)
    
    建立教學→ https://www.youtube.com/watch?v=DzeZGUHWTk0
3. **取得虛擬機器的 ==公用 IP 位址==**
    ![](https://i.imgur.com/LLnYjwO.png)
4. **開啟Azure VM連接端口**
    在左邊選單點選==網路==
    然後會在右邊看到==新增輸入連接埠規則==，點選它
    >設置連接埠
    >
    >★用來跟外部資料庫連接Ex:workbench↓↓
    >>
    >>==目的地連接埠範圍== 欄位輸入 ==3306==
      ==名稱== 欄位輸入 ==Port_3306==
      再按 ==新增== 
    ![](https://i.imgur.com/ri8rUVr.png)  
    >>
    >>
    >★之後要IP讓外部連接所需的設定↓↓
    >>
    >>==目的地連接埠範圍== 欄位輸入 ==8000==
      ==名稱== 欄位輸入 ==django==
      再按 ==新增== 
    >>![](https://i.imgur.com/HM4YYeG.png)
5. **登入到 Azure VM**
    首先要我們要用 Putty 來實作
    下載Putty，照這 [這個網址](https://www.youtube.com/watch?v=DzeZGUHWTk0) 產生金鑰，並成功與Putty連接
    就會進入到這個畫面↓
    ![](https://i.imgur.com/bOoafqZ.png)
6. **安裝MySQL**
輸入以下指令進行設置

    ● 更新
    ```
    sudo apt-get update
    ```
    ● 安裝 MySQL
    ```
    sudo apt-get install -y mysql-server
    ```
    ● mysql 設定檔修正
    ```
    nano /etc/mysql/mysql.conf.d/mysqld.cnf
    ```
    >※將 bind-address = 127.0.0.1 修改成 bind-address = 0.0.0.0![](https://i.imgur.com/bHP2IED.png)

    ● 重啟MySQL
    ```
    sudo systemctl restart mysql
    ```
 
    ● 查看目前MySQL所監聽的連接埠
    ```
    sudo netstat -tlnp | grep mysqld
    ```
7. **MySQL中建立新的使用者**
   輸入以下指令進行設置
   
   ● 啟動MySQL
    ```
    /etc/init.d/mysql start
    ```
   >※ 如果你的azure有重新啟動過，一定都要執行此指令
    
    ● 先進入root模式
    ```
    sudo -i
    ```
    ● 使用 MySQL 的 root 管理者帳號登入：
    ```
    mysql -u root -p 
    ```
    >(密碼預設:root)
    會變成 → mysql>
    ※ mysql指令後面都要加 “ ; “ 才能夠執行(直接按Enter只能當跳行看)
    ※ 其中 mysql -u root -p 的 root 可以更改其他使用者 Ex: mysql -u user -p
    
    ● 建立使用者
    
    →新增一個 MySQL 資料庫使用者 user，並將密碼設定為 password
    ```
    CREATE USER 'user'@'localhost' IDENTIFIED BY 'password';
    ```
    ```
    CREATE USER 'user'@'%' IDENTIFIED BY 'password';
    ```
    →授予 user 帳號在 SQL 資料庫上面的所有權限
    ```
    GRANT ALL ON *.* TO 'user'@'localhost';
    ```
    ```
    GRANT ALL ON *.* TO 'user'@'%';
    ```
8. **利用 Workbench 進行連線測試**
    先到 [這個網站](https://www.mysql.com/products/workbench/) 下載符合電腦系統的workbench
    
    ● 設置連線信息
    →→ 點選 +
    ![](https://i.imgur.com/ccEa34f.png)

    ● 設置 MySQL 的連線信息
    >在Connection Name欄位輸入 好記得名字
    在Hostname欄位輸入 虛擬機器的公用 IP 位址
    在Username欄位輸入 在Step 7. 所新建立的使用者帳號
    在Password欄位輸入 登入的密碼
    ![](https://i.imgur.com/10WnnSi.png)
    完成後按下==OK==
    
    ● 連線成功
    ![](https://i.imgur.com/0LurqBX.png)
    
9. **※補充**→ **MySQL基本語法**
     輸入時前面都會有 mysql>`MySQL語法;` ※分號 ; 記得要加
     
     ● 列出所有使用者帳號
    ```
    SELECT User,Host FROM mysql.user;
    ```
    ● 查看 ‘user’@’localhost’ 所擁有的權限
    ```
    SHOW GRANTS FOR 'user'@'localhost';
    ```
    ● 移除權限
    ```
    REVOKE ALL PRIVILEGES, GRANT OPTION FROM 'user'@'localhost';
    ```
    ● 移除帳號
    ```
    DROP USER 'user'@'localhost';
    ```
    ● 刪除的整個資料庫
    ```
    DROP DATABASE deldatabase;
    ```
    ● 顯示所有的資料庫
    ```
    show databases;
    ```
    ● 更新資料庫資料
    ```
    FLUSH PRIVILEGES;
    ```
    ● 關掉MySQL
    ```
    exit;
    ```
    ● 更改使用者密碼
    ```
    ALTER USER 'root'@'localhost' IDENTIFIED BY '新密碼'; 
    ```
    ●在 MySQL/MariaDB 中新增資料庫
    ```
    mysql>CREATE DATABASE my_db; 
    ```
    >這樣就會新增一個名為 my_db 的資料庫。
    


電商平台(2)-設定django
===
###### tags: `電商平台`

1. **在虛擬機上安裝Python3**
 
    ● 在Ubunto上可以使用此指令將pip3安裝在bash終端
    ```
    sudo apt install python3-pip
    ```
    ● 檢查Pyhon 3來確認成功安裝
    ```
    python3 -V
    ```
    ● 如果您使用的是其他版本的Ubuntu来安装 Python 3.6
    ```
    sudo apt-get install software-properties-common
    ```
    ```
    sudo add-apt-repository ppa:deadsnakes/ppa
    ```
    ```
    sudo apt-get update
    ```
    ```
    sudo apt-get install python3.6
    ```
2.  **創建虛擬環境**

    ● 推薦方法是使用venv模塊 (virtual environment)
    ```
    sudo apt install python3-venv
    ```
    ● 創建虛擬環境
    ```
    python3 -m venv venv 
    ```
    >記得在有venv檔裡使用此指令
    
    ● 要開始使用此 虛擬環境 ，必需通過運行activate腳本來激活它
    ```
    source venv/bin/activate
    ```
    >激活後，虛擬環境的bin目錄將添加到$ PATH變量的開頭。 此外，您的shell提示符也會更改，它將顯示您當前使用的虛擬環境的名稱。
    >![](https://i.imgur.com/nL5PjgF.png)


    
3.  **安裝Django**

    ● 執行以下指令
    ```
    pip install django
    ```
    >虛擬機需要安裝，以便直接執行
    >不過，在測試以及開發階段時可以在外部軟體執行，如VScode&PyCharm等等的...
    
    ● 要驗證安裝，請使用以下命令打印Django版本
    ```
    python -m django --version
    ```
    ● 安裝Django MySQLClient
    ```
    pip install mysqlclient
    ```
    
     ● 創建Django項目(創建名為mydjangoapp的新django項目)
    ```
    django-admin startproject mydjangoapp
    ```
    ● 下面的命令將在當前目錄中創建一個mydjangoapp目錄。 (創建APP)
    ```
    python manage.py startapp mydjangoapp
    ```
    ● 回到mydjangoapp目錄
    ```
    cd mydjangoapp
    ```
    ● 運行以下命令以 遷移數據庫 ：(兩個缺一不可)(產生、遷移)
    → 生成遷移檔案
    ```
    python manage.py makemigrations
    ```
    → 同步到資料庫中
    ```
    python manage.py migrate
    ```
    >★運行 遷移數據庫 後
    >>輸出如下
    >![](https://i.imgur.com/zrzXVZE.png)
    
4.  **創建管理用戶**

    ● 遷移數據庫後，創建一個管理用戶，以便您可以使用Django管理界面
    ```
    python manage.py createsuperuser
    ```
    >該命令將提示您輸入管理用戶的用戶名，電子郵件地址和密碼。
    >>![](https://i.imgur.com/9fuvYs5.png)
    
5.  **測試開發服務器**

    執行以下指令
    ```
    python manage.py runserver
    ```
    → 也可以指定
    ```
    python manage.py runserver 0.0.0.0:8000
    ```
    >![](https://i.imgur.com/ZFzFhwj.png)
    >可以通過在URL的末尾添加/ admin /來訪問Django管理界面。 
    >這將帶您進入管理員登錄界面：http://127.0.0.1:8000/admin/

:::danger
* 發生錯誤
[(1146, “Table '***.auth_user' doesn't exist“)](https://blog.csdn.net/THISFOREVERYONE/article/details/107065189)
本來進行數據庫遷移按照順序應該是下面兩個：
(生成一個臨時文件)`python manage.py makemigrations`
(根據臨時文件生成數據庫表)`python manage.py migrate`
但是在這裡只要執行第二條指令即可，因為第一條指令主要是用來在文件models.py中記錄關於模型變更的信息的，而我們這裡並不需要創建模型。所以直接執行第二條指令，進行數據遷移即可。
數據遷移之後，創建一個管理員用戶，然後登錄即可。
:::

6. **Django環境設定**
    方法兩種(建議第二種)
    1. 直接在Linux設定
         ● 回到mydjangoapp目錄
        ```
        cd mydjangoapp
        ```
        ●  編輯 settings.py
        ```
        nano mydjangoapp/settings.py
        ```
        >此時會進入Vim環境！！
       > 
        >按 " S " 為 insert 模式，可以對資料做修改
       > 
        >再按 " Esc " 則可以退出 insert 模式
       > 
        >輸入 " :wq " 為退出Vim模式
        
        ●  在 STATIC_URL = '/static/' 下面一行加入
        ```
        STATIC_ROOT = os.path.join(BASE_DIR, 'static')
        ```
        ●  在 ALLOWED_HOSTS設定所有外部IP都允許
        ```
        ALLOWED_HOSTS = ['*']
        ```
       
        ●  把剛剛新建的 APP 加入 mydjangoapp
        在 # Application definition  最下方 加入剛才建立的 mydjangoapp
    
            # Application definition
            INSTALLED_APPS = [ 
            'django.contrib.admin',    
            'django.contrib.auth',    
            'django.contrib.contenttypes',    
            'django.contrib.sessions',     
            'django.contrib.messages',    
            'django.contrib.staticfiles',       
            'mydjangoapp',  
             ]
                      
    2. 在VScode、PyCharm等軟體上修改

        步驟相似，但是可以直接點擊setting.py檔案直接做新增修改



7. **※補充**→ ==教學相關網址==
    
    (前置作業，需了解)
    [後台管理系統Admin](https://ithelp.ithome.com.tw/articles/10212429)
    
    (新增、查詢、修改、刪除)
    [善用Django ModelForm快速開發CRUD應用程序教學](https://www.learncodewithmike.com/2020/03/django-modelform.html)
    
    (客製化表單欄位)
    [Django ModelForm客製化表單欄位驗證的技巧](https://www.learncodewithmike.com/2020/04/django-custom-form-field-validation.html)
    
    (將後端資料呈現到前端)
    [Django Template(樣板)開發快速上手](https://www.learncodewithmike.com/2020/03/django-template.html)
    
    (後端上傳圖片)
    [Image File Upload to User Profile Model](https://www.youtube.com/watch?v=aNk2CAkHvlE&t=414s)


8. 如何自動生成和安裝requirements.txt依賴

    ●  生成requirements.txt文件
 
        pip freeze > requirements.txt

    ●  安裝requirements.txt依賴 (這個很重要!!!!!!!!)
        
        pip install -r requirements.txt
        