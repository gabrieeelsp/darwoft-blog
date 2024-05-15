import Header               from "./layout/Header";
import UserMenu             from "./layout/UserMenu";
import Footer               from "./layout/Footer";

import Error                from "./utils/Error";

import LastPosts            from "./publications/LastPosts";
import LastPostsCategory    from "./publications/LastPostsCategory";
import PostShowFirst        from "./publications/PostShowFirst";
import PostShowSecondary    from "./publications/PostShowSecondary";
import PostShowThird        from "./publications/PostShowThird";
import PostShowFourth       from "./publications/PostShowFourth";
import PostShowFifth        from "./publications/PostShowFifth";

import PostArticle          from "./publications/PostArticle";
import RelatedPosts         from "./publications/RelatedPosts";

import ChangePasswordForm   from "./auth/ChangePasswordForm";
import ForgotPasswordForm   from "./auth/ForgotPasswordForm";
import LoginForm            from "./auth/LoginForm";
import RegisterForm         from "./auth/RegisterForm";

import CheckInputAuth       from "./form/auth/CheckInputAuth";
import FormSubmitAuth       from "./form/auth/FormSubmitAuth";
import TextInputAuth        from "./form/auth/TextInputAuth";

import UserInfo             from "./profile/UserInfo";
import ImageProfile         from "./profile/userInfo/ImageProfile";
import UserInfoMenu         from "./profile/userInfo/UserInfoMenu";
import PersonalDataForm     from "./profile/PersonalDataForm";
import EditUserImageForm    from "./profile/EditUserImageForm";

import CheckInput           from "./form/profile/CheckInput";
import FormSubmit           from "./form/profile/FormSubmit";
import SelectInput          from "./form/profile/SelectInput";
import TextInput            from "./form/profile/TextInput";      

import PostsList            from "./profile/PostsList";
import NewPostForm          from "./profile/NewPostForm"

import PostListFilter       from "./profile/postList/PostListFilter";
import Datatable            from "./utils/datatable/Datatable";

import FormSubmitFilter     from "./form/filter/FormSubmitFilter";
import SelectInputFilter    from "./form/filter/SelectInputFilter";
import TextInputFilter      from "./form/filter/TextInputFilter";

import EditPostForm         from "./profile/EditPostForm";
import EditPostImageForm    from "./profile/EditPostImageForm";

import UsersList            from "./profile/admin/users/UsersList";
import UserListFilter       from "./profile/admin/users/list/UserListFilter";

import CategoriesList       from "./profile/admin/categories/CategoriesList";
import CategoriesListFilter from "./profile/admin/categories/list/CategoriesListFilter";
import CategoryEditForm     from "./profile/admin/categories/CategoryEditForm";
import NewCategoryForm      from "./profile/admin/categories/NewCategoryForm";

import Commemts             from './publications/comments/Comments';

import UserData             from "./profile/admin/users/UserData";
import UserStatusForm       from "./profile/admin/users/UserStatusForm";
import UserRolesForm        from "./profile/admin/users/UserRolesForm";
import UserComments         from "./profile/admin/users/UserComments";

import LastPostsViewed      from "./profile/LastPostsViewed";

export {
    Header,
    UserMenu,
    Footer,

    Error,

    LastPosts,
    LastPostsCategory,
    PostShowFirst,
    PostShowSecondary,
    PostShowThird,
    PostShowFourth,
    PostShowFifth,

    PostArticle,
    RelatedPosts,

    ChangePasswordForm,
    ForgotPasswordForm,
    LoginForm,
    RegisterForm,

    CheckInputAuth,
    FormSubmitAuth,
    TextInputAuth,

    UserInfo,
    ImageProfile,
    UserInfoMenu,
    PersonalDataForm,
    EditUserImageForm,

    CheckInput,
    FormSubmit,
    SelectInput,
    TextInput,

    PostsList,
    NewPostForm,

    PostListFilter,
    Datatable,

    FormSubmitFilter,
    SelectInputFilter,
    TextInputFilter,

    EditPostForm,
    EditPostImageForm,

    UsersList,
    UserListFilter,

    CategoriesList,
    CategoriesListFilter,
    CategoryEditForm,
    NewCategoryForm,

    Commemts,
    UserData,
    UserStatusForm,
    UserRolesForm,
    UserComments,

    LastPostsViewed,
}