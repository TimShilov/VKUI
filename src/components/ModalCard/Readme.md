Модальные карточки.

Карточка может быть закрыта смахиванием вниз, нажатием на полупрозрачную черную область, либо нажатием по иконке крестика (только на iOS). При этом вызовется свойство `onClose`.

**Очень важно** в качестве значения свойства `icon` использовать либо контурные иконки размером 56, например, `<Icon56NotificationOutline />`, либо `<Avatar size={72} src="" />`.

Пример использования показан в компоненте `ModalRoot`.