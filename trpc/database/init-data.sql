-- @formatter:off
insert into theme (id, title, created, author_id)
values (
'11111111-1111-4111-8111-111111111111',
'Lorem ipsum dolor sit amet',
'2022/10/01 12:34',
'31111111-1111-4111-8111-111111111111'
), (
'11111111-1111-4111-8111-111111111112',
'Lorem ipsum dolor sit amet',
'2022/10/02 12:34',
'31111111-1111-4111-8111-111111111112'
);

insert into comment (id, theme_id, body, created, author_id)
values (
'21111111-1111-4111-8111-111111111111',
'11111111-1111-4111-8111-111111111111',
'# bla bla bla
## bla bla bla
1. bla bla bla
1. bla bla bla
1. bla bla bla

## bla bla bla
sample
```js
const ns = [1, 2, 3, 4];

const sum = ns.reduce((acc, n) => acc + n, 0);

console.log(sum);    // 10
```

## bla bla bla
see also [here](#).',
'2022/10/01 12:34',
'31111111-1111-4111-8111-111111111111'
), (
'21111111-1111-4111-8111-111111111112',
'11111111-1111-4111-8111-111111111111',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
'2022/10/02 12:34',
'31111111-1111-4111-8111-111111111113'
);

insert into user (id, name, icon)
values (
'31111111-1111-4111-8111-111111111111',
'Cat',
'https://i.pinimg.com/564x/45/e8/1f/45e81f80885bf0fce1d438615c7f33bc.jpg'
), (
'31111111-1111-4111-8111-111111111112',
'Dog',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTW9ygU97SkpTmUHp7KXSGpaF0ZzezWbfgVQ&usqp=CAU'
), (
'31111111-1111-4111-8111-111111111113',
'Rabbit',
'https://i.pinimg.com/736x/5a/bf/f2/5abff2bdac8b0c112c22df13f9f07f84.jpg'
), (
'31111111-1111-4111-8111-111111111114',
'Flog',
'https://res.cloudinary.com/apollo-prj/image/upload/v1646556237/tol-prod/01FX40A72RR4EEZ0TY2QXJHYMA_2022-03-06T17:43:56%2B09:00.jpg'
), (
'31111111-1111-4111-8111-111111111115',
'Fish',
'https://iconbu.com/wp-content/uploads/2021/03/%E9%AD%9A%E3%81%AE%E3%83%95%E3%83%AA%E3%83%BC%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3.jpg'
), (
'31111111-1111-4111-8111-111111111116',
'Penguin',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOAVXveX1yi-mQ3d1pRkafo7eiHFYic5CS4o4FY0elEeAFxNEDHmvdvWFb3-OaIIc1mRk&usqp=CAU'
);
