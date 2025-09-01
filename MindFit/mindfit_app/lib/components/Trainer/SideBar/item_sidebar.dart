import 'package:flutter/widgets.dart';
import 'package:mindfit_app/theme/constants.dart';
import 'package:mindfit_app/widgets/overflow_widget.dart';

class ItemSideBar extends StatelessWidget {
  final IconData icon;
  final String title;
  final VoidCallback onTap;
  final bool select;

  const ItemSideBar({
    super.key,
    required this.icon,
    required this.title,
    required this.onTap,
    required this.select,
  });

  @override
  Widget build(BuildContext context) {
    final largura = MediaQuery.of(context).size.width;

    print(largura);

    return GestureDetector(
      onTap: onTap,
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 300),
        curve: Curves.linear,
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
        decoration: BoxDecoration(
          color: select ? Consts.colorGreen_300 : Consts.transparent,
          borderRadius: Consts.borderRadiusFull,
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Icon(icon, color: Consts.colorGreen_600, size: largura * 0.06),
            select ? SizedBox(width: 8) : SizedBox(width: 0),
            AnimatedSize(
              duration: Duration(milliseconds: 300),
              curve: Curves.decelerate,
              child: Overflow(
                alignment: Alignment.centerLeft,
                largura: select ? null : 0,
                widget: Text(
                  title,
                  style: TextStyle(
                    color: Consts.colorGreen_600,
                    fontSize: largura * 0.038,
                    fontFamily: 'Inter',
                    fontWeight: FontWeight.w700,
                  ),
                  maxLines: 1,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
