﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Finalochka
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Организации.
    /// </summary>
    // *** Start programmer edit section *** (Организации CustomAttributes)

    // *** End programmer edit section *** (Организации CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ОрганизацииE", new string[] {
            "Организация as \'Организация\'"})]
    [View("ОрганизацииL", new string[] {
            "Организация as \'Организация\'"})]
    public class Организации : ICSSoft.STORMNET.DataObject
    {
        
        private string fОрганизация;
        
        // *** Start programmer edit section *** (Организации CustomMembers)

        // *** End programmer edit section *** (Организации CustomMembers)

        
        /// <summary>
        /// Организация.
        /// </summary>
        // *** Start programmer edit section *** (Организации.Организация CustomAttributes)

        // *** End programmer edit section *** (Организации.Организация CustomAttributes)
        [StrLen(255)]
        public virtual string Организация
        {
            get
            {
                // *** Start programmer edit section *** (Организации.Организация Get start)

                // *** End programmer edit section *** (Организации.Организация Get start)
                string result = this.fОрганизация;
                // *** Start programmer edit section *** (Организации.Организация Get end)

                // *** End programmer edit section *** (Организации.Организация Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Организации.Организация Set start)

                // *** End programmer edit section *** (Организации.Организация Set start)
                this.fОрганизация = value;
                // *** Start programmer edit section *** (Организации.Организация Set end)

                // *** End programmer edit section *** (Организации.Организация Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ОрганизацииE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОрганизацииE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОрганизацииE", typeof(IIS.Finalochka.Организации));
                }
            }
            
            /// <summary>
            /// "ОрганизацииL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОрганизацииL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОрганизацииL", typeof(IIS.Finalochka.Организации));
                }
            }
        }
    }
}
