export class Articulo {
  cod_barras!: number;
  cod_asociado!: number;
  id_clasificacion!: number;
  cod_interno!: String;
  cod_descripcion!: String;
  descripcion_corta!: String;
  cantidad_um!: number;
  id_unidad!: String;
  id_proveedor!: String;
  precio_compra!: number;
  utilidad!: number;
  precio_venta!: number;
  tipo_articulo!: String;
  stock!: number;
  stock_min!: number;
  stock_max!: number;
  iva!: number;
  kit_fecha_ini!: Date;
  kit_fecha_fin!: Date;
  articulo_disponible!: Boolean;
  kit!: Boolean;
  fecha_registro!: Date;
  visible!: Boolean;
  puntos!: number;
  last_update_inventory!: Date;
  cve_producto!: String;
}
