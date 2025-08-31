import 'package:flutter/widgets.dart';

class Consts {
  Consts._();

  // =================== CORES ======================
  static Color white = Color(0xFFFFFFFF);
  static Color transparent = Color(0x00FFFFFF);
  static Color colorGray_200 = Color(0xFFE5E7EB);
  static Color colorGreen_300 = Color(0xFF5DD795);
  static Color colorGreen_600 = Color(0xFF00462E);

  // =================== BORDERS RADIUS ======================
  static BorderRadius borderRadiusFull = BorderRadius.all(Radius.circular(10000));
  static BorderRadius borderRadius([double value = 44]) =>BorderRadius.all(Radius.circular(value));

  // =================== STYLE TEXTS ======================
  static TextStyle textSmall = TextStyle(fontFamily: "Integer");
}
