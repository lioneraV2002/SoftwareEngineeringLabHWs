### پوشه‌ی `.git`  
مخزن داخلی Git که تمام تاریخچه، تنظیمات و متادیتای پروژه را ذخیره می‌کند.  
**اطلاعات کلیدی**:  
- `HEAD` (اشاره‌گر به کامیت/شاخه فعلی)  
- `objects` (داده‌های باینری کامیت‌ها و فایل‌ها)  
- `config` (تنظیمات اختصاصی پروژه)  
- `refs` (اشاره‌گرهای شاخه‌ها و تگ‌ها)  
**ساخت پوشه**:  
```bash
git init
```

---

### مفهوم Atomic بودن  
**Atomic Commit**:  
- تغییرات به‌صورت **یک واحد تجزیه‌ناپذیر** ثبت می‌شوند  
- یا همه تغییرات commit می‌شوند یا هیچ‌کدام (عدم ثبت نیمه‌کاره)  

**Atomic Pull Request**:  
- هر PR باید **یک وظیفه مستقل** را کامل کند  
- ویژگی‌ها:  
  - بدون شکستن build  
  - قابلیت تست و merge مجزا  

---

### تفاوت دستورات مدیریت تغییرات  
| دستور | کاربرد اصلی |  
|-------|-------------|                                                                               
| `fetch` | دریافت تغییرات از ریموت **بدون ادغام** |  
| `pull` | `fetch` + `merge` (دریافت و ادغام تغییرات) |  
| `merge` | ادغام شاخه‌ها با ایجاد **کامیت جدید** |  
| `rebase` | انتقال کامیت‌ها به نوک شاخه هدف (ایجاد تاریخچه خطی) |  
| `cherry-pick` | کپی کردن **تک کامیت** خاص به شاخه فعلی |  

---

### تفاوت دستورات بازگردانی  
| دستور | کاربرد |  
|-------|--------|  
| `checkout` | سوییچ بین شاخه‌ها/بازگردانی فایل‌ها |  
| `switch` | جایگزین مدرن `checkout` برای سوییچ شاخه |  
| `reset` | بازنشانی کامیت‌ها (حذف از تاریخچه) |  
| `revert` | ایجاد کامیت جدید برای خنثی‌سازی تغییرات |  
| `restore` | بازگردانی فایل‌ها از stage یا کامیت |  

---

### Stage (Index) و Stash  
**Stage/Index**:  
- منطقه میانی بین کدهای ویرایش‌شده و کامیت  
- با `git add` فایل‌ها به stage اضافه می‌شوند  

**`git stash`**:  
- ذخیره موقت تغییرات بدون کامیت  
```bash
git stash      # ذخیره تغییرات
git stash pop  # بازگردانی آخرین تغییرات
```

---

### مفهوم Snapshot  
- تصویر لحظه‌ای از کل پروژه در یک زمان خاص  
- هر کامیت یک **snapshot کامل** از پروژه است  
- کامیت‌ها با اشاره‌گر به اسنپشات والد مرتبط می‌شوند  
```mermaid
graph LR
A[کامیت 1] --> B[کامیت 2]
B --> C[کامیت 3]
```

---

### تفاوت Local vs Remote Repository  
| ویژگی | Local | Remote |  
|-------|-------|--------|  
| مکان | روی سیستم توسعه‌دهنده | روی سرور (GitHub/GitLab) |  
| کامیت‌ها | بدون نیاز به اینترنت | نیاز به شبکه |  
| دستورات کلیدی | `commit`, `branch` | `push`, `pull`, `clone` |  
| نمونه مسیر | `./.git/` | `https://github.com/user/repo.git` |  

---



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
