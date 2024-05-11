import HomePage from "@/pages/visitCardPages/HomePage.vue";
import LocationPage from "@/pages/visitCardPages/LocationPage.vue";
import ContactPage from "@/pages/visitCardPages/ContactPage.vue";
import GalleryPage from "@/pages/visitCardPages/GalleryPage.vue";

import Error404Page from "@/pages/errors/Error404Page.vue";
import Error500Page from "@/pages/errors/Error500Page.vue";

import LogInPage from "@/pages/visitCardPages/LogInPage.vue";
import SettingsPage from "@/pages/spaPages/SettingsPage.vue";

import CreateUserPage from "@/pages/spaPages/admin/CreateUserPage.vue";
import CreateChildPage from "@/pages/spaPages/admin/CreateChildPage.vue";
import FamiliesPage from "@/pages/spaPages/admin/FamiliesPage.vue";
import FamilyProfilePage from "@/pages/spaPages/FamilyProfilePage.vue";
import GroupChildrenPage from "@/pages/spaPages/admin/GroupChildrenPage.vue";
import GroupsPage from "@/pages/spaPages/admin/GroupsPage.vue";
import GroupStaffPage from "@/pages/spaPages/admin/GroupStaffPage.vue";
import StaffPage from "@/pages/spaPages/admin/StaffPage.vue";
import PaymentSettingsPage from "@/pages/spaPages/admin/PaymentSettingsPage.vue";

import AttendancePage from "@/pages/spaPages/AttendancePage.vue";
import ChildProfilePage from "@/pages/spaPages/ChildProfilePage.vue";
import StaffProfilePage from "@/pages/spaPages/StaffProfilePage.vue";
import TimetablePage from "@/pages/spaPages/TimetablePage.vue";
import TrustedPersonsPage from "@/pages/spaPages/TrustedPersonsPage.vue";
import UserProfilePage from "@/pages/spaPages/UserProfilePage.vue";

import ChildrenOfGroupProfilePage from "@/pages/spaPages/teacher/ChildrenOfGroupProfilePage.vue";
import StaffOfGroupProfilePage from "@/pages/spaPages/teacher/StaffOfGroupProfilePage.vue";

import AppDownloadPage from "@/pages/spaPages/parent/AppDownloadPage.vue";
import PaymentPage from "@/pages/spaPages/parent/PaymentPage.vue";

import BillPage from "@/pages/spaPages/BillPage.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  // Страницы визитки (доступ для всех)
  { path: "/", name: "Home", component: HomePage },
  { path: "/location", name: "Location", component: LocationPage },
  { path: "/contact", name: "Contact", component: ContactPage },
  { path: "/gallery", name: "Gallery", component: GalleryPage },

  { path: "/404", name: "404 Page", component: Error404Page },
  { path: "/500", name: "500 Page", component: Error500Page },

  // Страница входа (доступ для всех)
  { path: "/logIn", name: "LogIn", component: LogInPage },

  // Страницы администратора (доступ только для администратора)
  {
    path: "/groups",
    name: "Groups",
    component: GroupsPage,
    meta: { requiresAuth: true, roles: ["admin"] },
  },
  {
    path: "/groupChildren/:groupId",
    name: "GroupChildren",
    component: GroupChildrenPage,
    meta: { requiresAuth: true, roles: ["admin"] },
  },
  {
    path: "/groupStaff/:groupId",
    name: "Group Staff",
    component: GroupStaffPage,
    meta: { requiresAuth: true, roles: ["admin"] },
  },
  {
    path: "/createChild/:familyId",
    name: "Create Child",
    component: CreateChildPage,
    meta: { requiresAuth: true, roles: ["admin"] },
  },
  {
    path: "/createUser",
    name: "Create User",
    component: CreateUserPage,
    meta: { requiresAuth: true, roles: ["admin"] },
  },
  {
    path: "/families",
    name: "Families",
    component: FamiliesPage,
    meta: { requiresAuth: true, roles: ["admin"] },
  },
  {
    path: "/familyProfile/:familyId",
    name: "Family Profile",
    component: FamilyProfilePage,
    meta: { requiresAuth: true, roles: ["admin"] },
  },
  {
    path: "/staff",
    name: "Staff",
    component: StaffPage,
    meta: { requiresAuth: true, roles: ["admin"] },
  },
  {
    path: "/paymentSettings",
    name: "Payment Settings",
    component: PaymentSettingsPage,
    meta: { requiresAuth: true, roles: ["admin"] },
  },

  // Страницы учителя (доступ только для учителя)
  {
    path: "/childrenOfGroupProfile/:groupId",
    name: "Children Of Group Profile",
    component: ChildrenOfGroupProfilePage,
    meta: { requiresAuth: true, roles: ["teacher"] },
  },
  {
    path: "/staffOfGroupProfile/:groupId",
    name: "Staff Of Group Profile",
    component: StaffOfGroupProfilePage,
    meta: { requiresAuth: true, roles: ["teacher"] },
  },

  // Остальные страницы (доступ для всех аутентифицированных пользователей)
  {
    path: "/settings",
    name: "Settings",
    component: SettingsPage,
    meta: { requiresAuth: true, roles: ["admin", "teacher", "parent"] },
  },
  {
    path: "/staffProfile/:staffId",
    name: "Staff Profile",
    component: StaffProfilePage,
    meta: { requiresAuth: true, roles: ["admin", "teacher"] },
  },
  {
    path: "/timetable/:groupId",
    name: "Timetable",
    component: TimetablePage,
    meta: { requiresAuth: true, roles: ["admin", "teacher"] },
  },
  {
    path: "/attendance/:groupId",
    name: "Attendance",
    component: AttendancePage,
    meta: { requiresAuth: true, roles: ["admin", "teacher"] },
  },
  {
    path: "/familyProfile/:familyId",
    name: "Family Profile",
    component: FamilyProfilePage,
    meta: { requiresAuth: true, roles: ["admin", "teacher"] },
  },
  {
    path: "/childProfile/:childId",
    name: "Child Profile",
    component: ChildProfilePage,
    meta: { requiresAuth: true, roles: ["admin", "teacher"] },
  },
  {
    path: "/trustedPersons/:familyAccountId",
    name: "Trusted Persons",
    component: TrustedPersonsPage,
    meta: { requiresAuth: true, roles: ["admin", "teacher"] },
  },

  {
    path: "/userProfile/:userId",
    name: "User Profile",
    component: UserProfilePage,
    meta: { requiresAuth: true, roles: ["teacher", "parent"] },
  },

  // Страницы учителя (доступ только для родителя)
  {
    path: "/appDownload",
    name: "Mobile App Download",
    component: AppDownloadPage,
    meta: { requiresAuth: true, roles: ["parent"] },
  },
  {
    path: "/payment/:familyId",
    name: "Payment",
    component: PaymentPage,
    meta: { requiresAuth: true, roles: ["parent"] },
  },
  {
    path: "/bill/:billId",
    name: "Bill",
    component: BillPage,
    meta: { requiresAuth: true, roles: ["parent", "admin"] },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

import { logout } from "@/api/request";

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("userAuthenticated"); // Проверка аутентификации пользователя
  const userRole = localStorage.getItem("userRole"); // Получение роли пользователя из локального хранилища

  // Если маршрут требует аутентификации
  if (to.meta.requiresAuth) {
    // Если пользователь не аутентифицирован, перенаправляем на страницу входа
    if (!isAuthenticated) {
      next("/login");
    } else {
      // Если у пользователя нет доступа к маршруту, перенаправляем на страницу доступа запрещен
      if (!to.meta.roles.includes(userRole)) {
        next("/access-denied");
      } else {
        next(); // Продолжаем навигацию
      }
    }
  } else {
    // Если пользователь аутентифицирован и переходит на страницу без аутентификации,
    // вызываем метод logout
    if (isAuthenticated) {
      logout(); // Вызываем метод logout
    }
    next(); // Продолжаем навигацию для открытых маршрутов
  }
});

export default router;

/* router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("userAuthenticated"); // Проверка аутентификации пользователя
  const userRole = localStorage.getItem("userRole"); // Получение роли пользователя из локального хранилища

  // Если маршрут требует аутентификации
  if (to.meta.requiresAuth) {
    // Если пользователь не аутентифицирован, перенаправляем на страницу входа
    if (!isAuthenticated) {
      next("/login");
    } else {
      // Если у маршрута есть метаданные и роли пользователя
      if (to.meta.roles && to.meta.roles.includes(userRole)) {
        next(); // Продолжаем навигацию
      } else {
        next("/access-denied"); // Перенаправляем на страницу доступа запрещен
      }
    }
  } else {
    // Если пользователь аутентифицирован и переходит на страницу без аутентификации,
    // вызываем метод logout
    if (isAuthenticated) {
      logout(); // Вызываем метод logout
    }
    next(); // Продолжаем навигацию для открытых маршрутов
  }
});
 */