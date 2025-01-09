import clsx from 'clsx';
// import './Alert.css';
import css from './Alert.module.css';

// const getBgColor = variant => {
//   switch (variant) {
//     case 'info':
//       return 'blue';
//     case 'success':
//       return 'green';
//     case 'error':
//       return 'red';
//     case 'warning':
//       return 'orange';
//     default:
//       throw new Error(`Unsupported variant prop value - ${variant}`);
//   }
// };

// const Alert = ({ variant, children }) => {
//   return (
//     <p
//       className="alert"
//       style={{
//         backgroundColor: getBgColor(variant),
//       }}
//     >
//       {children}
//     </p>
//   );
// };

// const Alert = ({ variant, children }) => {
//   const classNames = ['alert', variant];

//   return <p className={classNames.join(' ')}>{children}</p>;
// };

// const Alert = ({ variant, outlined, elevated, children }) => {
//   const classNames = ['alert', variant];

//   if (outlined) {
//     classNames.push('is-outlined');
//   }

//   if (elevated) {
//     classNames.push('is-elevated');
//   }

//   return <p className={classNames.join(' ')}>{children}</p>;
// };

// const Alert = ({ variant, outlined, elevated, children }) => {
//   return (
//     <p
//       className={clsx('alert', variant, {
//         'is-outlined': outlined,
//         'is-elevated': elevated,
//       })}
//     >
//       {children}
//     </p>
//   );
// };

const Alert = ({ variant, outlined, elevated, children }) => {
  return (
    <p
      className={clsx(
        css[variant],
        outlined && css.isOutlined,
        elevated && css.isElevated
      )}
    >
      {children}
    </p>
  );
};

export default Alert;
