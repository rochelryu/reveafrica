"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var app_service_1 = require("./app.service");
var typeorm_1 = require("@nestjs/typeorm");
var article_module_1 = require("./modules/article/article.module");
var theme_module_1 = require("./modules/theme/theme.module");
var type_theme_module_1 = require("./modules/type-theme/type-theme.module");
var categorie_module_1 = require("./modules/categorie/categorie.module");
var ressource_module_1 = require("./modules/ressource/ressource.module");
var config_1 = require("@nestjs/config");
var frontside_module_1 = require("./frontside/frontside.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        common_1.Module({
            imports: [
                config_1.ConfigModule.forRoot(),
                typeorm_1.TypeOrmModule.forRoot({
                    type: process.env.DB_DIALECT,
                    host: process.env.DB_HOST,
                    port: process.env.DB_PORT,
                    username: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_NAME,
                    synchronize: process.env.NODE_ENV !== 'production',
                    entities: ['dist/**/*.entity{.ts,.js}']
                }),
                // DefaultAdminModule,
                article_module_1.ArticleModule,
                theme_module_1.ThemeModule,
                type_theme_module_1.TypeThemeModule,
                categorie_module_1.CategorieModule,
                ressource_module_1.RessourceModule,
                frontside_module_1.FrontsideModule,
            ],
            providers: [app_service_1.AppService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
